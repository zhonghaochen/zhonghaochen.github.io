---
title: "Classification of hyperspectral image based on dual-branch feature interaction network"
collection: publications
date: 2022-05-3
venue: 'May 03'
---
[Download paper here](https://www.tandfonline.com/doi/full/10.1080/01431161.2022.2089069)

<div style="text-align: justify;">
Abstract: Hyperspectral image (HSI) classification method based on convolutional neural network (CNN) has been widely used and has achieved remarkable results. However, the convolution operation is good at extracting local features, it is difficult to capture the global representation. Recently, Vision Transformer (ViT) shines with cascading self-attention modules that can aggregate global representation between patch embeddings. The self-attention module cascaded in ViT can capture long-distance feature dependencies, but it is prone to ignore the local feature details. In order to address those series of problems, this article proposes a dual-branch feature interaction (DBFI) network based on CNN and ViT, which allows global information and local feature to fully interact to enhance feature representation capabilities. To resolve the problem of the semantic gap between the two branches, a feature interaction unit (FIU) based on the attention mechanism is designed as an information interactive bridge to connect the two branches. The features are branched from ViT to CNN through the upsampling stream to enhance the global perception of the network. Similarly, the down-sampling stream is used as a coupling to connect the CNN branch to the Transformer branch to supplement the local detailed features of the network. In addition, the channel attention and spectral attention in FIU can further emphasize the distinguishability of HSI features and improve the performance of network. Experiments are conducted on three benchmark HSI datasets demonstrate that the DBFI network is better than other classification methods.
</div>
