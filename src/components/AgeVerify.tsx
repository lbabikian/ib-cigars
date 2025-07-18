'use client';

import { ReactNode, useEffect, useState } from 'react';   /* age gate wrapper for 21+ */
import { useRouter, usePathname } from 'next/navigation';   

export default function AgeVerify({ children }: { children: ReactNode }) {

  const pathname   = usePathname();   /* needed for 404 bypass the gate */
  const router     = useRouter();

  const [isVerified, setIsVerified]   = useState(false);
  const [checked,     setChecked]     = useState(false);
  const [redirecting, setRedirecting] = useState(false);

    if (pathname === '/404') {
    return <>{children}</>;
  }

  useEffect(() => {
    const verified = localStorage.getItem('is21Verified');
    if (verified === 'true') setIsVerified(true);
    setChecked(true);
  }, []);

  /*  handlers  */
  const handleAccept = () => {
    localStorage.setItem('is21Verified', 'true');
    setIsVerified(true);
  };

  const handleReject = () => {
    localStorage.removeItem('is21Verified');
    setRedirecting(true);             /* block further renders */
    router.replace('/404');           /* immediate redirect to Next.js 404 */
  };

  if (!checked || redirecting) {
    return (
      <div className="min-h-screen bg-deepCharcoal flex items-center justify-center text-pureWhite">
        Redirecting&hellip;
      </div>
    );
  }

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-deepCharcoal flex flex-col items-center justify-center text-center text-pureWhite px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-richGold drop-shadow-[0_3px_5px_rgba(200,146,44,0.6)] font-serif">
          Are you 21 or older?
        </h1>

        <p className="mb-6 italic text-ivoryCream">
          You must be of legal age to enter this site.
        </p>

        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="bg-richGold hover:bg-[#d9a441] text-pureWhite px-6 py-3 rounded font-semibold transition shadow-md"
          >
            Yes, I am 21+
          </button>
          <button
            onClick={handleReject}
            className="bg-shadowGray hover:bg-[#2c2c2c] text-pureWhite px-6 py-3 rounded font-semibold transition shadow-md"
          >
            No, I’m not
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}