// import DashboardFeature from '@/components/dashboard/dashboard-feature';
import Link from 'next/link';
import { WalletButton } from './../components/solana/solana-provider';
// export default function Page() {
//   return <DashboardFeature />;
// }

export default function Page() {
  return (
    <div className="py-7">
      <section></section>

      <section className="flex pt-20 px-5 justify-center">
        <div className="gap-5 w-full flex max-w-[1200px]">
          <div className="w-1/2 h-96">
            <p className="text-5xl w-3/4">Linkthree</p>
            <p className="font-bold pt-3 text-2xl w-4/5">
              Fast, friendly, powerful, and the first decentralize link in bio
              tool
            </p>
            <p className="pt-3 pb-16 w-4/5">
              One link to help you share all your creations, curated content,
              and products across your social media profiles. User-friendly,
              secure, and integrated with the Web3 ecosystem. Create a
              hassle-free blockchain-based link in bio and watch your portfolio
              generate revenue.
            </p>
            <Link
              href="/account"
              className="border rounded-full px-16 py-3 bg-gradient-to-r from-purple-900 to-purple-950 font-black"
            >
              Get started for free
            </Link>
          </div>
          <div className="w-1/2 h-96">
            <div className="flex flex-col w-80 ml-44">
              <img className="ml-auto" src="/logo.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 flex flex-col gap-5 w-full max-w-[1200px]">
        <div className=" overflow-auto">
          <div className="gap-5 flex w-full">
            <div className="flex flex-col w-3/4 gap-5">
              <div className="flex gap-5">
                <div className="w-2/3 h-60 rounded-xl bg-white">
                  <p className="text-black font-bold text-2xl text-center pt-14">Create and Customize Your Linkthree in Minutes</p>
                  <p className="text-black text-center p-7">Effortlessly set up your Linkthree in just a few minutes with a user-friendly interface that ensures you control your own data securely through blockchain technology.</p>
                </div>
                <div className="w-1/3 h-60 rounded-xl bg-white">
                  <p className="text-black font-bold text-2xl text-center pt-7 w-full">Limitless Sharing Capabilities</p>
                  <p className="text-black text-center p-3 w-full ">Showcase your content—articles, videos, or digital products—without restrictions, backed by the decentralization and security of blockchain.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-1/3 h-60 rounded-xl bg-white ">
                  <p className="text-black font-bold text-2xl text-center pt-7">Simplified Monetization</p>
                  <p className="text-black text-center p-7">Easily sell products and collect payments through our platform, utilizing smart contracts for secure and transparent transactions.</p>
                </div>
                <div className="w-2/3 h-60 rounded-xl bg-white ">
                  <p className="text-black font-bold text-2xl text-center pt-14">Seamless Integration Across Social Platforms</p>
                  <p className="text-black text-center p-7">Share your Linkthree from Instagram, TikTok, Twitter, and more, driving traffic and engagement with ease, thanks to our adaptable infrastructure.</p>
                </div>
              </div>
            </div>
            <div className="w-1/4 rounded-xl bg-white ">
              <p className="text-black font-bold text-2xl text-center pt-36">Build and Engage Your Community</p>
              <p className="text-black text-center p-7">Unify your audience in one place, fostering deeper connections and owning your data and interactions, which allows for personalized engagement strategies.</p>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <p className="text-xl pt-5 pb-10">Choose Linkthree for a secure, innovative, and user-friendly link-in-bio solution that empowers your online presence while keeping you at the center of control.</p>
          <Link
            href="/account"
            className="border rounded-full px-16 py-3 bg-gradient-to-r from-purple-900 to-purple-950 font-black"
          >
            Get started for free
          </Link>
        </div>

      </section>

      <section className="mt-20 flex flex-col gap-5 w-full max-w-[1200px]">
        <div className="overflow-auto">
          <div className='text-center'>
            <p className='font-bold text-4xl'>OUR TEAM</p>
            <p className='text-xl pb-20'>With over 100 years experience</p>
          </div>
          <div className="flex gap-5 mb-10">
            <div className="w-1/3 h-96 rounded-xl bg-gradient-to-t from-purple-900 to-purple-950 overflow-hidden">
              <img src="/Blockchain_Regis_Syawaludin_Rifaldi.png" alt="foto" className="w-full h-full object-cover rounded-xl scale-125" />
            </div>
            <div className="w-1/3 h-96 rounded-xl bg-gradient-to-t from-purple-900 to-purple-950 overflow-hidden">
              <img src="/Blockchain_Ranaufal Muha.png" alt="" className="w-full h-96 object-cover rounded-xl" />
            </div>
            <div className="w-1/3 h-96 rounded-xl bg-gradient-to-t from-purple-900 to-purple-950 overflow-hidden">
              <img src="/Blockchain_Metaverse_Maulana_Anjari_Anggorokasih-removebg-preview.png" alt="" className="w-full h-full object-cover rounded-xl scale-90 mt-5" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-1/3 rounded-xl">
              <p className='text-center font-bold text-white'>FOUNDER <br /> Regis Syawaludin Rifaldi</p>
            </div>
            <div className="w-1/3 rounded-xl">
              <p className='text-center font-bold text-white'>FOUNDER <br /> Ranaufal Muha </p>
            </div>
            <div className="w-1/3 rounded-xl">
              <p className='text-center font-bold text-white'>FOUNDER <br /> Maulana Anjari </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
