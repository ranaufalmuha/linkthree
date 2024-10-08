// 'use client';

// import { WalletButton } from '../solana/solana-provider';
// import * as React from 'react';
// import { ReactNode, Suspense, useEffect, useRef, useState } from 'react';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// import { AccountChecker } from '../account/account-ui';
// import {
//   ClusterChecker,
//   ClusterUiSelect,
//   ExplorerLink,
// } from '../cluster/cluster-ui';
// import toast, { Toaster } from 'react-hot-toast';

// export function UiLayout({
//   children,
//   links,
// }: {
//   children: ReactNode;
//   links: { label: string; path: string }[];
// }) {
//   const pathname = usePathname();
//   const [isUsername, setIsUsername] = useState(false);

//   function checkShow() {
//     const the = links.map((label, path) => label);
//     console.log(the);
//     console.log(pathname);
//     for (let i = 0; i < the.length; i++) {
//       console.log(the[i]['path']);
//       if (pathname == the[i]['path'] || pathname != '/') {
//         setIsUsername(true);
//       } else {
//         setIsUsername(false);
//       }
//     }
//   }

//   useEffect(() => {
//     checkShow();
//   }, []);

//   return (
//     <div className="">
//       {isUsername ? (
//         <div className="">{children}</div>
//       ) : (
//         <div className="h-full bg-background flex flex-col justify-between">
//           <div className="navbar text-neutral-content flex-col md:flex-row space-y-2 md:space-y-0">
//             <div className="flex-1">
//               <Link className="btn btn-ghost normal-case text-xl" href="/">
//                 <img className="h-8" alt="Logo" src="/logo.png" />
//               </Link>
//               <ul className="menu menu-horizontal px-1 space-x-2">
//                 {links.map(({ label, path }) => (
//                   <li key={path}>
//                     <Link
//                       className={pathname.startsWith(path) ? 'active' : ''}
//                       href={path}
//                     >
//                       {label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             {/* <div className="flex-none space-x-2">
//           <WalletButton />
//           <ClusterUiSelect />
//         </div> */}
//           </div>
//           <ClusterChecker>
//             <AccountChecker />
//           </ClusterChecker>
//           <div className="flex-grow mx-4 lg:mx-auto">
//             <Suspense
//               fallback={
//                 <div className="text-center my-32">
//                   <span className="loading loading-spinner loading-lg"></span>
//                 </div>
//               }
//             >
//               {children}
//             </Suspense>
//             <Toaster position="bottom-right" />
//           </div>
//           <footer className="footer footer-center p-4 bg-base-300 text-base-content">
//             <p>Created by {'LinkThree'}</p>
//           </footer>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import { WalletButton } from '../solana/solana-provider';
import * as React from 'react';
import { ReactNode, Suspense, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AccountChecker } from '../account/account-ui';
import {
  ClusterChecker,
  ClusterUiSelect,
  ExplorerLink,
} from '../cluster/cluster-ui';
import toast, { Toaster } from 'react-hot-toast';

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
          <div className="flex-grow mx-4 lg:mx-auto">
            <Suspense
              fallback={
                <div className="text-center my-32">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              }
            >
              {children}
            </Suspense>
            <Toaster position="bottom-right" />
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
}: {
  children?: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
}) {
  return (
    <div className="hero py-[64px]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          {typeof title === 'string' ? (
            <h1 className="text-5xl font-bold">{title}</h1>
          ) : (
            title
          )}
          {typeof subtitle === 'string' ? (
            <p className="py-6">{subtitle}</p>
          ) : (
            subtitle
          )}
          {children}
        </div>
      </div>
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
