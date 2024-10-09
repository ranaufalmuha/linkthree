'use client';

import { WalletButton } from '../solana/solana-provider';
import * as React from 'react';
import { ReactNode, Suspense, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AccountDetailFeature from '@/components/account/account-detail-feature';
import { AccountChecker } from '../account/account-ui';
import {
  ClusterChecker,
  ClusterUiSelect,
  ExplorerLink,
} from '../cluster/cluster-ui';
import toast, { Toaster } from 'react-hot-toast';
import { useMemo } from 'react';
import SidebarLayout from '@/components/dashboard/sidebar';
import { useParams } from 'next/navigation';

export function UiLayout({
  children,
  links,
}: {
  children: ReactNode;
  links: { label: string; path: string }[];
}) {
  const pathname = usePathname();
  const [counter, setCounter] = useState(0);
  const [isUsernamePage, setIsUsernamePage] = useState(false);
  const params = useParams();
  const address = useMemo(() => {
    if (!params.address) {
      return;
    }
    return params.address;
  }, [params]);
  if (!address) {
    return <div>Error memuat akun</div>;
  }
  function checkShow() {
    console.log('Current Pathname:', pathname);

    // Loop through the `links` array to see if the current pathname matches any of the predefined routes
    const isPredefinedRoute = links.some(({ path }) =>
      pathname.startsWith(path)
    );

    if (isPredefinedRoute || pathname === '/') {
      setIsUsernamePage(false);
    } else {
      setIsUsernamePage(true);
    }
  }
  useEffect(() => {
    checkShow();
  }, [pathname]);

  return (
    <div className="">
      {/* Conditionally render layout without navbar and footer for /username/[username] */}
      {isUsernamePage ? (
        <div className="h-dvh flex items-center justify-center">{children}</div>
      ) : (
        <div className="h-full bg-background flex flex-col justify-between">
          <div className="navbar text-neutral-content flex-col md:flex-row space-y-2 md:space-y-0">
            <div className="flex-1">
              <Link className="btn btn-ghost normal-case text-xl" href="/">
                <img className="h-8" alt="Logo" src="/logo.png" />
              </Link>
              <ul className="menu menu-horizontal px-1 space-x-2">
                {links.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      className={pathname.startsWith(path) ? 'active' : ''}
                      href={path}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-none space-x-2">
              <WalletButton />
              <ClusterUiSelect />
            </div>
          </div>
          <ClusterChecker>
            <AccountChecker />
          </ClusterChecker>
          <div className="flex-grow lg:mx-auto">
            <div className="flex justify-between w-dvw h-[calc(100vh-120px)]">
              <div className="w-1/6">
                <SidebarLayout/>
              </div>
              {/* Main Content Area */}
              <div className="w-5/6 px-4">
                  <Suspense
                      fallback={
                          <div className="text-center my-32">
                              <span className="loading loading-spinner loading-lg"></span>
                          </div>
                      }
                  >
                      {children}
                  </Suspense>
              </div>

            </div>
          </div>
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>Created by {'LinkThree'}</p>
          </footer>
        </div>
      )}
    </div>
  );
}

export function AppModal({
  children,
  title,
  hide,
  show,
  submit,
  submitDisabled,
  submitLabel,
}: {
  children: ReactNode;
  title: string;
  hide: () => void;
  show: boolean;
  submit?: () => void;
  submitDisabled?: boolean;
  submitLabel?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (show) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [show, dialogRef]);

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="modal-box space-y-5">
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
        <div className="modal-action">
          <div className="join space-x-2">
            {submit ? (
              <button
                className="btn btn-xs lg:btn-md btn-primary"
                onClick={submit}
                disabled={submitDisabled}
              >
                {submitLabel || 'Save'}
              </button>
            ) : null}
            <button onClick={hide} className="btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export function AppHero({
  children,
  title,
  subtitle,
  image,
  username
}: {
  children?: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  image: ReactNode;
  username: ReactNode;
}) {
  return (
    <div className="flex justify-between items-stretch">
      {/* Bagian kiri: foto profil */}
      <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
      </div>
      {/* Bagian tengah: username dan subtitle */}
      <div className="flex flex-col justify-center items-start flex-grow mx-4">
        <div className="text-md font-semibold">@{username ? username : 'username'}</div>
        {typeof subtitle === 'string' ? (
          <p className="text-sm text-gray-600">{subtitle}</p>
        ) : (
          subtitle
        )}
      </div>
      {typeof title === 'string' ? (
        <div>
          <h1 className="text-md font-bold">{title}</h1>
        </div>
      ) : (
        <div>
          {title}
        </div>
      )}
    </div>
  );
}

export function ellipsify(str = '', len = 4) {
  if (str.length > 30) {
    return (
      str.substring(0, len) + '..' + str.substring(str.length - len, str.length)
    );
  }
  return str;
}

export function useTransactionToast() {
  return (signature: string) => {
    toast.success(
      <div className={'text-center'}>
        <div className="text-lg">Transaction sent</div>
        <ExplorerLink
          path={`tx/${signature}`}
          label={'View Transaction'}
          className="btn btn-xs btn-primary"
        />
      </div>
    );
  };
}
