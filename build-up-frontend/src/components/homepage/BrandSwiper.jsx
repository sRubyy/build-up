import React from 'react';
import '../../scss/homepage/homepage.scss';
import BrandIcon from './BrandIcon';

function BrandSwiper() {
  const brands = [
    {
      name: 'Nike',
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/6d15/b9fb/234d4d9c094a9a58e943f897f55545de?Expires=1699228800&Signature=XUPtd6fBnYgAIfZ3ahu5aQKibOsZgxJRy6Zv-QmvC26704RIgHHnhBS6TFxayquWimdZU-5JIbSKTSlk4oLrnJbIcNBhK~BTrwNvfttltAac~om~ReOuL3eAAxDzJAu2IT1if6BVgamSJEU--uA2APBxxsprGQMlWm6bpZwjrSMfnPp~3xqUzgC-YStLxEOSBKalOGmEk-jDAFbUamBLWaa7qb~Sjd8bqhO60qCa2EXAGOyTeFAKF2n6vQKGhrJ9eQBoou3-WBIFrk-pYBV3xr0epFz6LpNxFEY-quqqck31~IaPoTh4akTPucI9kLMZv6~mApHtp2YmKpeUyW~nsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Adidas',
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/c023/501b/a3516ec3bd441afd31752e07a776071b?Expires=1699228800&Signature=fG31KPLL8w-Shha7h4A4o1Ivy~Urx3G0OupVEAcTcAN4b8xxQMf3~V0ZaaWy9UjcLhD78YbtBziz42tE1dcC7VZtkDecxd1n6uddCcvuhUke3kwVxYvGWzcRv9JLyPqr3ocAXUXhRZTHd7F9WmosIT2jwHE2yTwxM07wl6UbhFJkNzQQz8-dvbw8E0QJcBib~kawgfjG4MzLLJoAt2HyL9hA82qv0jtxMladUZO3Un21Pp1I82UWoA1hfuKgzkSpfiEzLrAUsivCmxQ4Qp0koo6jpJPHLnMR5~zbgpUb6DFpq8zftg4dnctzfZ9ATCfjbcBJMv7y4O56LSVXFO5w6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'New Balance',
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/365b/95fa/c93077c81e07a00d8aa06ac4a33113c6?Expires=1699228800&Signature=PMGAzAqgCmkS5ir91OpcjU4eQyHOMahELSIzGcbeUhemMt~rY9fN3wDWwejH2boRcLsMqYYJPQPmQFwMEaA-DQ5W0gda8XtzAI1x6v4-4y5DeT5htAPGMueVQq-SF0RZvHrcVqGw3npyPUqhwUW9emgcDINUp0vPT53vRG1UkpZGYPJCuhdCG1zWvESNjykVuTRjOLf1j5aQcfKLLhwEhh~OkxAfAcvRN7XJwp3kGzrWP61~g0GlgAqMugfHQpgKWKNg8CSGoEQKH~ozvrbNJVrExjWoyH8J~SukT6CV0x2d9q7De4m5VTC~Tovi330knvSUdImx-ZAFMVqGxTosaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Gucci',
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/bcd5/6480/c2f10473876768350dead17b100a7e31?Expires=1699228800&Signature=O1HaVrMUWlqwm9VBfwJ~SVglUxpE2SRRRGMQbHFVySk4dQsUb-Xa6PyJP6MwnyJbSq9-nNqzGvikjt89rtx3iyljxkDJZaPlOiaH6KKThoZ5o6dDj--FHQPFdSts6tZBhauvpfl6nsXmYssYGp2F1jEyZX51f~Z5f03f6qYRH3bltRfMyKBZ2G1wIi3sTN5Exn~o4zWx~TJWFYmHErdq2ghk-ke6VVQJ2z4oz-d0WyUoUdOnO-rs6khg2qnj1kisIElQsxTo8KpyfSPjrUTY5ODD6h0tMSHWKtVzrNZwCmpD75YSZeeokJx475b1sJBtIq6J93SpP8~ihrtWMms7ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    { name: 'Chanel', logoUrl: '/image/brand-logo/chanel.png' },
    {
      name: 'Celine',
      logoUrl:
        'https://s3-alpha-sig.figma.com/img/2e0f/2a65/c4330f37e3983c9bf261c4ae8c1a0c1d?Expires=1699228800&Signature=MAazU8uJzMV5y501ikGKhfmdMXBYU6Ry8~dHIvw5Gj6-cP5hi6OqVKPTxqd9Y4caJHAZo36dLAKh~WqpA9Dwi5S0x2O4wPrxl0a9f4uFxlV9IOa9ZN722ky~QF465PnLamCY~rpEGUzRve-JqzUsUdjy81HZZaPIq6p335Q34R0E5sNbeCnEjf9MRKrr45RSaAgrlDuTH5re12ohjwS8pcCBFsXfHfEIwlRqtTTIUNTJBhz8qgiyV9bT-1g8TBDnmpmXxG9HyYfwhgk6kVlmv5ta2qvwsTv77c8yZgu~unpkAsTiARqtyzqfABt3ImEetoymRhhWvFnkn9J97C-wNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];

  return (
    <div className="swiper-container">
      <div className="swiper-container__brand">
        {brands.map((brand, index) => (
          <BrandIcon key={index} name={brand.name} logoUrl={brand.logoUrl} />
        ))}
      </div>
    </div>
  );
}

export default BrandSwiper;
