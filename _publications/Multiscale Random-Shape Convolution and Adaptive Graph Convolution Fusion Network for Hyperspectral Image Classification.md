---
title: "Multiscale Random-Shape Convolution and Adaptive Graph Convolution Fusion Network for Hyperspectral Image Classification"
collection: publications
date: 2024-04-18
venue: '29 September'
---
H. Gao, R. Sheng, **Z. Chen**, H. Liu, S. Xu, B. Zhang <br>
IEEE TGRS
[Download paper here](https://ieeexplore.ieee.org/abstract/document/10504929)

<div style="text-align: justify;">
Convolution neural networks (CNNs) are extensively utilized in hyperspectral image (HSI) classification due to their remarkable capability to extract features from patterns with fixed shapes. These networks have been shown to effectively capture features at the pixel level. However, the fixed shape of convolution kernels poses a challenge for CNNs to adapt to the diverse shapes found in HSIs. Graph neural networks (GNNs), particularly graph convolution networks (GCNs), possess robust feature extraction capabilities on graph structures and are extensively applied in HSI classification. However, one significant challenge in using GNNs is the selection of appropriate neighboring nodes for information aggregation. To address the existing challenges of GCN and CNN and leverage their respective advantages, this article introduces a novel patch-based CNN-GCN fusion classification network, named multiscale random-shape convolution and adaptive graph convolution fusion network (MRCAGCFN). It consists of a spectral transformation module (STM) and three main modules we proposed: a multiscale random-shape convolution (RSC) module for extracting convolution features, where the shape of the convolution kernel is randomized and a multiscale approach is applied to enhance adaptability to data with diverse shapes; an adaptive feature-fusion graph convolution module (AFGCM) for extracting graph convolution features, where the weights for neighborhood aggregation are learned adaptively to reduce feature fusion from dissimilar nodes and strengthen feature fusion from similar nodes; and an adaptive local feature processing module for processing features, where two different methods are employed to convert patch-level features to pixel-level features, thereby improving feature representation. MRCAGCFN combines the strengths of CNN and GCN while introducing enhancements to better accommodate diverse feature shapes. Experimental results on three HSI classification datasets demonstrate that our proposed MRCAGCFN outperforms some existing methods. The codes of our MRCAGCFN will be available at https://github.com/shengrunhua/MRCAGCFN .
</div>
