type Article = Readonly<{
  id: number;
  title: string;
  author: string;
  link: string;
  tags: string[];
  date: string;
}>;

export const Articles: readonly Article[] = [
  {
    id: 1,
    title: 'Watch some metrics using Raspberry and React',
    author: 'h4x0rlol',
    link: 'react-raspberry-dashboard',
    tags: ['Raspberry Pi', 'React', 'Sensors', 'Nodejs', 'Linux', 'TailwindCSS'],
    date: 'December 29, 2021',
  },
  {
    id: 2,
    title: 'Setting up Ryzen CPUs on Arch Linux (and others)',
    author: 'h4x0rlol',
    link: 'archlinux-ryzen-setup',
    tags: ['Linux', 'Arch', 'Ryzen', 'Voltage', 'Noise', 'Sensors'],
    date: 'August 22, 2021',
  },
];
