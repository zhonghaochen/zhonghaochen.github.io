---
title: "A Multidepth and Multibranch Network for Hyperspectral Target Detection Based on Band Selection"
collection: publications
date: 2023-05-07
venue: '07 May'
---
H. Gao, Y. Zhang, **Z. Chen**, S. Xu, D. Hong, B. Zhang <br>
IEEE TGRS
[Download paper here](https://ieeexplore.ieee.org/document/10073570)

<div style="text-align: justify;">
Abstract: Deep learning (DL) has recently risen to prominence in hyperspectral target detection (HTD). Nevertheless, how to tackle the extreme training sample imbalance together with achieving target highlighting and background suppression is challenging. In addition, due to the spectral redundancy of hyperspectral imagery (HSI), it is a new course for HTD through band selection (BS) to retain crucial bands, thereupon improving the subsequent detection performance. Accordingly, we propose a DL-based BS-HTD (DLBSTD) algorithm, incorporating DL-based BS with DL-based HTD for the first time. Most significantly, a multidepth and multibranch network (MDBN) for HTD based on a novel BS method is proposed. First, the BS method, including an alternating local-global reconstruction network (ALGRN) and a correlation measurement strategy, provides representative bands containing key target information for MDBN. For the training sample imbalance of MDBN, we develop a BS-based method to select multifarious representative background training samples and propose a target band random substitution (TBRS) strategy to augment an ample target training set. Finally, the MDBN composed of a multidepth feature extraction (MDFE) module, three fusion strategies, and the parallel local convolution and gated recurrent unit (Conv-GRU) fully taps the spectral feature relationships to highlight targets and suppress backgrounds. Compared with nine competitive HTD algorithms, we carry out plentiful experiments on four classical datasets exhibiting that the proposed DLBSTD has strong generalization and salient detection performance of target highlighting and background suppression.
