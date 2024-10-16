---
title: "Adaptively Dictionary Construction for Hyperspectral Target Detection"
collection: publications
date: 2023-03-27
venue: '27 March'
---
C. Li, W. Zhang, Y. Zhang, **Z. Chen**, H. Gao <br>
IEEE GRSL
[Download paper here](https://ieeexplore.ieee.org/document/10050134)

<div style="text-align: justify;">
Abstract: The task of hyperspectral images (HSIs) target detection is to identify whether the target spectral sequences present in the HSI. Recently, the topic of representation models has received much interest in hyperspectral target detection. The performance of representation models depends on whether the corresponding dictionary and sparse matrix can correctly recover the original spectrum. Therefore, the background dictionary of these models should contain the spectra of all classes except the target spectrum; i.e., the dictionary should be overcomplete. However, most representation models cannot satisfy this condition. Moreover, due to the potentially large spectral similarity between the target and the background, representation models perform poorly in background suppression. Aiming to solve these issues, a novel adaptively dictionary construction (ADC) strategy with background suppression sparse representation (BSSR) module is proposed in this letter, called adaptively dictionary construction for target detection (ADCTD). Specifically, the proposed ADC is adopted to segment the HSI into superpixels consisting of pixels with similar spectra. This process can be considered as an unsupervised coarse classification process, which can construct an overcomplete background dictionary. In addition, the BSSR is adopted to improve the separation of the target and background by a linear function. Experiments on three datasets demonstrate the superiority of the proposed ADCTD.
