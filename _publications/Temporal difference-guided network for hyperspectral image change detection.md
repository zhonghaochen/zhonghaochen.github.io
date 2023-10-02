---
title: "Temporal difference-guided network for hyperspectral image change detection"
collection: publications
date: 2023-09-29
venue: '29 September'
---
IEEE JSTARS
[Download paper here](https://www.tandfonline.com/doi/full/10.1080/01431161.2023.2258563)

<div style="text-align: justify;">
Recently, the research area of hyperspectral (HS) image change detection (CD) is popular with convolutional neural networks (CNNs) based methods. However, conventional CNNs-based CD algorithms commonly achieve detection by comparing the deep features extracted from the bi-temporal images at decision level, which often fails to take full advantage of the features extracted by the network at different levels. Moreover, there are inevitably substantial redundant features located in non-varying regions in bi-temporal images, which considerably impedes the training efficiency of CNNs-based methods. To solve these two problems, we propose a temporal difference-guided HS image CD network, called TDGN Specifically, the rich spectral features will be extracted from the bi-temporal images hierarchically, and then the differences between the two images at different levels of the network will be yielded by the elaborated convolutional gated recurrent unit block in the spatial dimension. Furthermore, the differences from these different levels will be fused for the final detection. More significantly, to boost the efficiency of the backbone network for feature extraction, the obtained difference at each level is also leveraged to generate variation weights to guide the feature extraction at the next stage. Finally, the proposed TDGN can make full use of the temporal difference obtained by the network at different levels while this information is further employed to facilitate the attention and extraction of change features by the network. Extensive experiments, implemented on four well-known HS data sets, demonstrate that the proposed TDGN yields an average overall accuracy of 98.67%, 96.74%, 99.36%, and 96.81% on these data sets, respectively, acquiring promising detection performance compared to state-of-the-art methods. The codes of this work will be available at https://github.com/zhonghaochen/TDGN_Master for the sake of reproducibility.
</div>
