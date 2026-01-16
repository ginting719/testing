import { ReceivingModule, ContentType } from './types';

export const RECEIVING_MODULES: ReceivingModule[] = [
  {
    id: 'consignment',
    title: 'Receiving by Consignment',
    description: 'Pelajari langkah-langkah spesifik untuk menangani inventaris konsinyasi, dari kedatangan hingga rekonsiliasi penjualan.',
    checklistUrl: 'https://drive.google.com/uc?export=download&id=1ymSd5DpYPdDPgKE5BkLiQKGASAqXofQZ',
    materials: [
      { id: 'cons-mindmap', type: ContentType.MindMap, title: 'Mindmap Overview', content: 'https://cdn.jsdelivr.net/gh/ginting719/Audio/consignment.jpeg' },
      { id: 'cons-ik', type: ContentType.PPT, title: 'SOP/IK', content: 'https://drive.google.com/file/d/1VhIIZN_ULSNXRJkz3rH-FlxYs0hxl4Vr/view?usp=sharing' },
      { id: 'cons-slide', type: ContentType.PPT, title: 'Slide Presentasi', content: 'https://chat.z.ai/space/b0k3z9f6tsr0-ppt' },
      { id: 'cons-video1', type: ContentType.Video, title: 'Video 1', content: 'https://youtu.be/dGJHtrq4b2o' },
      { id: 'cons-video2', type: ContentType.Video, title: 'Video 2', content: 'https://youtu.be/BVNyOF866C0' },
      { id: 'cons-podcast', type: ContentType.Podcast, title: 'Podcast', content: 'https://drive.google.com/file/d/1qJqsEy7w-DZgpKgQF88PBw4_r0T6dY3C/view?usp=drive_link' },
      { id: 'cons-qa', type: ContentType.ExternalLink, title: 'Q&A', content: 'https://chat.z.ai/space/h031e9kr1t31-art' },
    ]
  },
  {
    id: 'apd',
    title: 'Receiving by APD',
    description: 'Pelajari proses lengkap untuk menerima barang melalui APD, mulai dari pemeriksaan awal hingga entri sistem.',
    checklistUrl: 'https://drive.google.com/uc?export=download&id=1AUw6caCPzKgylSYvulwYqM9m3uhzIVqn',
    materials: [
      { id: 'apd-mindmap', type: ContentType.MindMap, title: 'Mindmap Overview', content: 'https://cdn.jsdelivr.net/gh/ginting719/Audio/APD.jpeg' },
      { id: 'apd-ik', type: ContentType.PPT, title: 'SOP/IK', content: 'https://drive.google.com/file/d/1oX2TDdobSED_yGJePH5NRPCDTZXrtwgr/view?usp=sharing' },
      { id: 'apd-slide', type: ContentType.PPT, title: 'Slide Presentasi', content: 'https://chat.z.ai/space/m0syw8cssnh1-ppt' },
      { id: 'apd-video1', type: ContentType.Video, title: 'Video 1', content: 'https://youtu.be/XPqzvbKPWOU' },
      { id: 'apd-video2', type: ContentType.Video, title: 'Video 2', content: 'https://youtu.be/p23FZET3mQs' },
      { id: 'apd-podcast', type: ContentType.Podcast, title: 'Podcast', content: 'https://drive.google.com/file/d/1uBRyRkHLPFZkQBjZDFOwcdXgPSyg1x3O/view?usp=sharing' },
      { id: 'apd-qa', type: ContentType.ExternalLink, title: 'Q&A', content: 'https://chat.z.ai/space/q0t1t9fazc61-art' },
    ]
  },
  {
    id: 'eksternal',
    title: 'Receiving by Eksternal',
    description: 'Kuasai prosedur untuk menangani pengiriman yang datang dari pemasok dan vendor eksternal.',
    checklistUrl: 'https://drive.google.com/uc?export=download&id=119_wxbMowJms2m_cdPkQk9fXnn7RP6t0',
    materials: [
      { id: 'ext-map', type: ContentType.MindMap, title: 'Mindmap Overview', content: 'https://cdn.jsdelivr.net/gh/ginting719/Audio/eksternal.png' },
      { id: 'ext-ik', type: ContentType.PPT, title: 'SOP/IK', content: 'https://drive.google.com/file/d/1rSYqg0KoxcHzzbxHA-QJVG5pO8vSaLKb/view?usp=sharing' },
      { id: 'ext-slide', type: ContentType.PPT, title: 'Slide Presentasi', content: 'https://chat.z.ai/space/h0z179ahgf90-ppt' },
      { id: 'ext-video1', type: ContentType.Video, title: 'Video 1', content: 'https://youtu.be/TpBpXpDqfdo' },
      { id: 'ext-video2', type: ContentType.Video, title: 'Video 2', content: 'https://youtu.be/TL1p4UZShmg' },
      { id: 'ext-video3', type: ContentType.Video, title: 'Video 3', content: 'https://youtu.be/uSEgtJzTpRA' },
      { id: 'ext-podcast', type: ContentType.Podcast, title: 'Podcast', content: 'https://drive.google.com/file/d/1mPSpS38iNdunV3o0B-GkNolqYVXBXyth/view?usp=sharing' },
      { id: 'ext-qa', type: ContentType.ExternalLink, title: 'Q&A', content: 'https://chat.z.ai/space/k0s109ec72z1-art' },
    ]
  },
  {
    id: 'cfu',
    title: 'Receiving by CFU',
    description: 'Panduan khusus untuk memproses pengembalian dan kedatangan dari unit pelanggan (CFU).',
    checklistUrl: 'https://drive.google.com/uc?export=download&id=1STRFyGMeSSF296A-1TQ5pq4KAx4xusKR',
    materials: [
      { id: 'cfu-map', type: ContentType.MindMap, title: 'Mindmap Overview', content: 'https://cdn.jsdelivr.net/gh/ginting719/Audio/CFU.png' },
      { id: 'cfu-ik', type: ContentType.PPT, title: 'SOP/IK', content: 'https://drive.google.com/file/d/1aBiyXVGh-DqTacay0sJrFwzc9pmGlIL9/view?usp=sharing' },
      { id: 'cfu-slide', type: ContentType.PPT, title: 'Slide Presentasi', content: 'https://chat.z.ai/space/z0m3y9bka660-ppt' },
      { id: 'cfu-video1', type: ContentType.Video, title: 'Video 1', content: 'https://youtu.be/WDd_5-DhDw8' },
      { id: 'cfu-podcast', type: ContentType.Podcast, title: 'Podcast', content: 'https://drive.google.com/file/d/1mbkNcHIf801pE1y9PtVYsm6GKSNEDZz2/view?usp=sharing' },
      { id: 'cfu-qa', type: ContentType.ExternalLink, title: 'Q&A', content: 'https://chat.z.ai/space/k0c309tkhra0-art' },
    ]
  },
   {
    id: 'tn',
    title: 'Receiving by TN',
    description: 'Prosedur untuk mengelola transfer barang internal antar toko (Transfer Antar Toko).',
    checklistUrl: 'https://drive.google.com/uc?export=download&id=1p9yg8uIcFUQdh8dWzKTp-sxnQzMnZnz9',
    materials: [
      { id: 'tn-map', type: ContentType.MindMap, title: 'Mindmap Overview', content: 'https://cdn.jsdelivr.net/gh/ginting719/Audio/tnt.png' },
      { id: 'tn-ik', type: ContentType.PPT, title: 'SOP/IK', content: 'https://drive.google.com/file/d/1CeavF0_2jBQHLPxfSOQbk09XzmYtWECc/view?usp=sharing' },
      { id: 'tn-slide', type: ContentType.PPT, title: 'Slide Presentasi', content: 'https://chat.z.ai/space/m004k9k7sqt1-ppt' },
      { id: 'tn-video1', type: ContentType.Video, title: 'Video 1', content: 'https://youtu.be/FFzpx0lv__g' },
      { id: 'tn-video2', type: ContentType.Video, title: 'Video 2', content: 'https://youtu.be/LUCcERriLA8' },
      { id: 'tn-podcast', type: ContentType.Podcast, title: 'Podcast', content: 'https://drive.google.com/file/d/11fdiLAYGuNnGP0COCp7vzbsZOmg8eGJV/view?usp=sharing' },
      { id: 'tn-qa', type: ContentType.ExternalLink, title: 'Q&A', content: 'https://chat.z.ai/space/w014s9zmtj01-art' },
    ]
  },
];
