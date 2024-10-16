---
title: "Transformer-inspired stacked-GAN for hyperspectral target detection"
collection: publications
date: 2024-07-09
venue: '9 July'
---
C. Li, R. Wang, **Z. Chen**, H. Gao, S. Xu <br>
TRES
[Download paper here](https://www.tandfonline.com/doi/abs/10.1080/01431161.2024.2370500)

<div style="text-align: justify;">
Hyperspectral images (HSI) can provide abundant spectral feature information and have been successfully used in the field of object detection. The use of Generative Adversarial Network (GAN) to reconstruct the background spectral to achieve differential detection has shown excellent performance in hyperspectral object detection (HTD) tasks. However, due to factors such as noise interference and the complexity of the background, such algorithms also face many challenges such as lack of background sample mixing, poor reconstruction effect, and generation of out-of-class samples. A Transformer-inspired stacked GAN network (STGAN) is proposed to solve these problems. First, in the data preparation phase, we adopted a method of extracting pure background samples at a deep level. Then, in the encoder module, the background spectral features are mined using a Transformer-Encoder with Position Coding and Multihead Self-Attention Mechanism (MHSA). Finally, the same GAN is stacked based on the above network structure, and the latent feature mapping of the first GAN is used as input to reduce the out-of-class samples and achieve a more detailed reconstruction of the background. The comparison experiments of our model with other algorithms on datasets in different scenarios prove its advanced performance.
</div>
