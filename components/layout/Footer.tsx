
"use client";
import Container from "@/components/ui/Container";

import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InfoIcon from '@mui/icons-material/Info';
import SecurityIcon from '@mui/icons-material/Security';
import { useTranslations, useLocale } from "next-intl";

import { use } from "react";
import { Link } from "@/i18n/navigation";

export default function Footer() {



  const t = useTranslations("Footer");
  const locale = useLocale();


  return (
    <footer id="footer" className="border-t border-white/8 bg-[#506c35] py-16 text-sm text-white/60">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          

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
              {t("contact")}
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
                <p>+49 831 52 73 26 64</p>

              </div>
              <p className="text-white/60 ml-8">Paltech GmbH</p>


              <div className="flex flex-row gap-2">
                <LocalPhoneIcon />
                <p>+49 831 52 72 03 45</p>
              </div>
              <p className="text-white/60 ml-8">EIP Anbaugerät</p>


              <div className="flex flex-row gap-2">
                <LocalPhoneIcon />
                <p>+49 831 52 73 30 63</p>
              </div>
              <p className="text-white/60 ml-8">EIP Kennarten/Bärenklau</p>

            </div>
          </div>

          <div>
            <h3 className="text-white text-4xl font-semibold mb-4 ">
              {t("dataProtection")}
            </h3>

            <div className="flex flex-col gap-3 pt-6 text-xl">

              <div className="flex flex-row gap-2">

              <Link
                href="/impressum"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <InfoIcon />
                <span>{t("impressum")}</span>
              </Link>
              </div>

              <div className="flex flex-row gap-2">
                <SecurityIcon />

                <a
                  href="/privacy"
                  className="transition hover:text-white"
                >
                  {t("privacy")}
                </a>

              </div>
            </div>
          </div>
          <div>© Paltech – 2026. {t("rights")}</div>
        </div>


      </Container>
    </footer>
  );
}