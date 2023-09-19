---
title: "Hyperspectral Target Detection via Spectral Aggregation and Separation Network With Target Band Random Mask"
collection: publications
date: 2023-06-23
venue: '23 June'
---
[Download paper here](https://ieeexplore.ieee.org/document/10161584)

<div style="text-align: justify;">
Abstract: Hyperspectral target detection (HTD) is a pixel-wise detection method based on limited prior targets and spectral differences, which has been widely studied and applied in many fields. Recently, deep learning (DL) plays an important role in hyperspectral imagery (HSI) processing. However, for HTD, the severe lack of class-balanced training sets is an enormous challenge. Meanwhile, it is difficult to suppress backgrounds while highlighting targets through the deep network. To address these issues, we propose a spectral aggregation and separation network (SASN) with a target band random mask (TBRM) for HTD in this article. For the training sets of SASN, a multifarious representative background selection strategy (MRBS) is first proposed to obtain a multifarious and representative background training set. Next, aiming at the notorious class imbalance, a data augmentation (DA) method, TBRM, is proposed to generate adequate target training set by repeating randomly zero-masking the spectral bands of a prior target. Subsequently, in the training of SASN, residual connection and squeeze-and-excitation (SE) channel attention mechanism are applied to fully extract high discriminative features and nonlinear ones in the spectra. Besides, to better separate the targets and backgrounds, a triplet-soft loss function is presented, which makes the training in the direction of spectral separation of background samples from both the prior target and target samples. During testing, the trained SASN distinguishes the spectral similarities and differences simultaneously for highlighting targets and suppressing backgrounds. Moreover, extensive experimental results validate that the proposed method has superior detection performances, background suppression capacity, and separability compared with ten cutting-edge HTD algorithms on six benchmark HSI datasets.
</div>
