
"use client";
import Container from "@/components/ui/Container";

import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InfoIcon from '@mui/icons-material/Info';
import SecurityIcon from '@mui/icons-material/Security';

import { use } from "react";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/8 bg-[#506c35] py-16 text-sm text-white/60">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* COLUMN 1 — LOGO */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/images/logos/white.png"
                alt="Covadonga Logo"
                className="h-36"
              />
 
            </div>

    
          </div>

          {/* COLUMN 2 — CONTACT */}
          <div>
            <h3 className="text-white text-4xl font-semibold mb-4 ">
              Contact us!
            </h3>

            <div className="space-y-6 text-white text-xl pt-6">
              <div className="flex flex-row gap-2">
                <EmailIcon />
                <p>info@paltech.eu</p>
              </div>

              <div className="flex flex-row gap-2">
                <RoomIcon />
                <p>Kaufbeurer Str. 85, 87437 Kempten (Allgäu)</p>
              </div>


              <div className="flex flex-row gap-2">
                <LocalPhoneIcon />
                <p>+49 831 52751458</p>
              </div>
              <p className="text-white/60 ml-8">Paltech GmbH</p>


              <div className="flex flex-row gap-2">
                <LocalPhoneIcon />
                <p>+49 831 52727129</p>
              </div>
              <p className="text-white/60 ml-8">EIP Anbaugerät</p>


              <div className="flex flex-row gap-2">
                <LocalPhoneIcon />
                <p>+49 831 52741438</p>
              </div>
              <p className="text-white/60 ml-8">EIP Kennarten/Bärenklau</p>



    
            </div>
          </div>

          {/* COLUMN 3 — LEGAL */}
          <div>
            <h3 className="text-white text-4xl font-semibold mb-4 ">
             Data Protection
            </h3>

            <div className="flex flex-col gap-3 pt-6 text-xl">

              <div className="flex flex-row gap-2">
                <InfoIcon />
                <a
                  href="/privacy"
                  className="transition hover:text-white"
                >
                  Imprint
                </a>
              </div>

              <div className="flex flex-row gap-2">
                <SecurityIcon />

                <a
                  href="/data-protection"
                  className="transition hover:text-white"
                >
                  Data Protection
                </a>

              </div>
    


       

            </div>
          </div>
          <div>© Paltech – 2026. All rights reserved.</div>
        </div>

        {/* BOTTOM BAR
        <div className="mt-12 border-t border-white/8 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Covadonga</p>
          <p className="text-white/35">
            Enhancing Maritime Safety
          </p>
        </div> */}
      </Container>
    </footer>
  );
}