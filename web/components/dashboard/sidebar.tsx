import { useState, useMemo } from 'react';
import Link from 'next/link'; 
import AccountDetailFeature from '@/components/account/account-detail-feature'; // Update the import based on your file structure
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';

function SidebarLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname();
    const params = useParams();
    const address = useMemo(() => {
        if (!params.address) return;
        return params.address;
    }, [params]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    if (!address) {
        return <div>Error loading account</div>;
    }

    return (
        <div className={`hidden lg:flex px-6 bg-base-300 h-full flex-col justify-between relative transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden'}`} id="sidebar">  
            <div className="">
                <AccountDetailFeature />
                <div className='mt-10'>
                    <Link href={`/account/${address}`} className={`${pathname === `/account/${address}` ? 'bg-gradient-to-r from-purple-900 to-purple-950 my-2' : 'hover:bg-gradient-to-r from-purple-900 to-purple-950 my-2'} p-4 rounded-2xl w-full text-start block`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        My Linkthree
                    </Link>
                    <Link href={`/account/${address}/mynfts`} className={`${pathname === `/account/${address}/mynfts` ? 'bg-gradient-to-r from-purple-900 to-purple-950 my-2' : 'hover:bg-gradient-to-r from-purple-900 to-purple-950 my-2'} p-4 rounded-2xl w-full text-start block`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        My NFTs
                    </Link>
                </div>
            </div>
            <div className="space-y-2">
                <hr className="border-gray-500" />
                <div className="space-y-2">
                    <button className="hover:bg-gradient-to-r from-purple-900 to-purple-950 p-4 rounded-2xl w-full text-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Setting
                    </button>
                    <button className="hover:bg-gradient-to-r from-purple-900 to-purple-950 p-4 rounded-2xl w-full text-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Support
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SidebarLayout;
