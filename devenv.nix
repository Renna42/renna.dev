{
  pkgs,
  lib,
  config,
  inputs,
  ...
}: {
  env.GREET = "devenv";

  packages = with pkgs; [
    git
  ];

  languages = {
    javascript = {
      enable = true;
      corepack.enable = true;
    };
  };

  treefmt = {
    enable = true;
    config.programs = {
      alejandra.enable = true;
      prettier.enable = true;
    };
  };

  git-hooks = {
    package = pkgs.prek;
    hooks = {
      eslint.enable = true;
      treefmt = {
        enable = true;
        packageOverrides.treefmt = config.treefmt.build.wrapper;
      };
    };
  };
}
