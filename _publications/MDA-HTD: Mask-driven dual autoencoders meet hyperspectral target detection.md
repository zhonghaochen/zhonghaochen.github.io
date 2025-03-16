---
title: "MDA-HTD: Mask-driven dual autoencoders meet hyperspectral target detection"
collection: publications
date: 2025-03-08
venue: '8 Mar'
---
**Z. Chen**; Hongmin Gao; Zhengtao Lu; Yiyan Zhang; Yao Ding; Xin Li; Bing Zhang <br>
IP&M 2025
[Download paper here](https://www.sciencedirect.com/science/article/abs/pii/S0306457325000482?via%3Dihub)

<div style="text-align: justify;">
Existing background learning-based hyperspectral (HS) target detection (HTD) methods employ an adversarial autoencoder (AAE) to model the background distribution of HS images, which may lead to pattern collapse. To tackle this challenge, we propose the mask-driven dual autoencoder for HTD (MDA-HTD), an adversarial learning-free spectral learning framework capable of effectively and robustly reconstructing background pixels. Our approach involves three steps: background sample generation, background distribution learning, and HS image reconstruction for target detection. First, we design a locally spatially constrained background spectral selection (LSCBS
) strategy to generate high-confidence background samples and produce coarse target detection results. Next, we introduce the MDA network, consisting of an autoencoder (AE) and a spectral masking autoencoder (SMAE). Specifically, the AE is driven to learn the background spectral features more robustly by constraining the consistency between the AE and SMAE latent features. To mask spectral bands without losing spectral trend information, we propose neighborhood spectral averaging masking strategy. In the detection stage, the trained AE reconstructs all pixels in the HS image, and detection results are obtained by comparing the reconstructed and original images. These results are fused with coarse detection results using a quadratic exponential nonlinear filter for the final detection outcome. Experimental evaluations on four publicly recognized benchmarks and one synthetic data demonstrate that the proposed MDA-HTD achieves state-of-the-art detection performance, surpassing previous AAE-based methods by an average of 0.79%, 2.1%, 0.32%, 3.1%, and 3.8% in AUC value.
</div>
