---
title: "Local aggregation and global attention network for hyperspectral image classification with spectral-induced aligned superpixel segmentation"
collection: publications
date: 2023-06-24
venue: '24 June'
---
ESWA
[Download paper here](https://www.sciencedirect.com/science/article/pii/S0957417423013301?via%3Dihub)

<div style="text-align: justify;">
Abstract: Recently, graph neural networks (GNNs) have been demonstrated to be a promising framework in investigating non-Euclidean dependency in hyperspectral (HS) images. Since the extraction of inter-pixel relationships using GNNs is computationally intensive, the mainstream GNN-based HS image classification (HSIC) methods often segment original images into superpixels as nodes for further graph propagation. Nevertheless, the low representation of raw spectral signatures limits the segmentation accuracy. Moreover, the preexisting GNN-based approaches have failed to consider the importance between long-range nodes. In this article, we firstly propose a novel superpixel generate strategy, called spectral-induced aligned superpixel segmentation, which can utilize the segmentation results of HS image with raw and deep abstract spectral feature simultaneously. More specifically, the deep spectral feature is excavated by a deep autoencoder. Intuitively, two fusion strategies: minimum and maximum fusion are further explored to integrate above segmentation results. Furthermore, we propose a local aggregation and global attention block (LAGAB) by incorporating graph sample and aggregate strategy and graph transformer to hierarchically explore local and global spatial features. Note that due to the aggregation of node information in the local neighborhood, the further used graph transformer can adaptively model intra-neighbor information. Consequently, a network formed by LAGABs is developed for HSIC. Comprehensive experiments conducted on four highly regarded HS data sets reveal that the proposed method exhibits promising classification performance.
</div>
