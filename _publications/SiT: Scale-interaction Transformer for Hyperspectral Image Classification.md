---
title: "SiT: Scale-interaction Transformer for Hyperspectral Image Classification"
collection: publications
date: 2025-08-3
venue: '13 August'
---
**Z. Chen**, SK. Roy, H. Gao, Y. Ding, B. Zhang <br>
IEEE TGRS
[Download paper here](https://ieeexplore.ieee.org/document/11124215)

<div style="text-align: justify;">
Recently, transformers have emerged as a promising technique for capturing saliency feature dependencies that exist in hyperspectral (HS) images for the land-use and land-cover image classification tasks. However, existing transformer-based methods suffer from a significant challenge because they only take into account long-range dependencies between features in a fixed-size neighbourhood. To tackle this problem, we proposed a novel scale-interaction transformer (SiT) tailored for HS image classification tasks. Specifically, two initial multi-scale feature extraction modules are first designed for the modeling of spatial and spectral features, respectively. Furthermore, we investigate traditional transformer encoders to handle multi-scale inputs and suggest a novel transformer-based encoder, called SiT encoder (SiTE), for modeling long-range dependencies of multi-scale spectral and spatial features. More specifically, to enable the exploration of global correlation from multi-scale perspectives in SiTE, an additional scale set is generated in addition to the query, key, and value sets. More importantly, to balance the contributions of spatial and spectral features during the final classification, we propose a novel loss function, called spectral and spatial consistency constraint (S2C2) loss, which adaptively fuses these features without introducing additional parameters. Experimental evaluations carried out on four public benchmarks showcase that the proposed SiT attains state-of-the-art classification performance and outperforms the previous SOTA by 2.83%, 3.04%,2.67%, and 5.97% in terms of overall accuracy across four data sets. The code will be available at https://github.com/zhonghaochen/SiT.
</div>
