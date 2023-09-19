---
title: "Fusion network for local and global features extraction for hyperspectral image classification"
collection: publications
date: 2022-05-19
venue: 'May 19'
---
[Download paper here](https://www.tandfonline.com/doi/full/10.1080/01431161.2022.2102952)

<div style="text-align: justify;">
Abstract: Hyperspectral image (HSI) contains hundreds of contiguous spectral bands compared with red green blue (RGB) image, making the precise identification of materials possible by capturing subtle spectral and spatial features. Owing to the special advantage in image processing, convolutional neural networks (CNNs) have been proven to be a successful architecture in HSI classification. However, due to the limitation of receptive field of fixed convolution kernel, CNNs can only extract local features of hyperspectral image. Besides, CNNs fail to mine and represent the sequence attributes of spectral bands because of the limitations of its inherent network backbone. With the emergence of vision transformer, the network can break through the limitation of receptive field and obtain the global correlation of the whole image, but it only focuses on the global information of the object and ignores the local information existing in the sequence and images. Moreover, the correlation of spectral information will be destroyed if traditional methods are directly used to convert hyperspectral images into sequence. To solve this issue, a novel convolution and vision transformer fusion network called CAVFN is devised which contains a new cube-embedding module that can reduce the loss of spectral information effectively by dividing the large HSI cube into several small cubes and encoding them into sequences. More significantly, this paper also combines 1D-CNN and 2D-CNN with vision transformer to extract the local features of sequences and patches, and combines them with global features to obtain better classification results. Finally, this paper evaluates the classification results of the proposed network on three HSI datasets by conducting extensive experiments, showing that our network outperforms other state-of-the-art methods.
</div>
