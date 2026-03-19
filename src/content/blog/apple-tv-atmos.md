---
title: Apple TV 输出杜比全景声
pubDatetime: 2026-03-16T22:11:55+08:00
modDatetime: 2026-03-19T06:17:33+08:00
description: Apple TV 播放 Dolby Atmos 的坑
tags: [try, apple-tv]
---

先说结论，需要 _E-AC3-JOC_ 格式的音频

## 需求

之前一直用的是电视自带的扬声器在播放视频，没有怎么在意过全景声什么的东西，最近入了一套廉价全景声设备，然后发现很多输出的都是 LPCM 且不带有全景声信息

## 研究

很多影片用的 FLAC、AC3 这些都是没有全景声支持的，而 TrueHD 和 EAC3 是支持 Dolby Atmos 的

Apple TV 有 Dolby Atmos 直通输出支持，但是仅限于 EAC3 JOC 格式，因此采用该格式的影片可以直接用 Infuse 播放

但是很多蓝光碟的音频流采用的 Dolby TrueHD 编码，但 Apple TV 最多能做到的就是拆分成普通 7.1 声道音频流输出了

DTS-HD MA 是单纯的无损音频流，在 Apple TV 上会经过解码之后发送出去。DTS:X 我目前并没有对应的片源，看起来并不是很多见的格式

## TrueHD Atmos to EAC3 JOC

最近看到的一个项目 [truehdd](https://github.com/truehdd/truehdd)，支持将 TrueHD 音频流转换为 atmos 母版文件

既然如此就可以实现用 gMKVExtractGUI 提取出音频流然后用 truehdd 解码成母版，最后使用 Dolby Media Encoder 重新编码为 EAC3 JOC 格式

一些细节上的问题：DME 重新编码的时候应该使用 `Dolby Digital Plus for online media` 这个编码器，`blu-ray` 的那个似乎没法在 Apple TV 上以全景声格式输出

最后用 MKVToolNix 重新混流为 mkv，完毕
