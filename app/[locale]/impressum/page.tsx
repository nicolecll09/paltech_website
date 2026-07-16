export default function Page() {
    return (
      <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold">Impressum</h1>
  
          <p>
            Paltech GmbH
            <br />
            Kaufbeurer Str. 85
            <br />
            Gebäude 44
            <br />
            87437 Kempten
          </p>
  
          <p>
            Handelsregister: HRB 16087
            <br />
            Registergericht: Amtsgericht Kempten
          </p>
  
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Vertreten durch</h2>
            <p>
              Dr. Florian Schiegg
              <br />
              Felix Schiegg
            </p>
          </div>
  
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Kontakt</h2>
            <p>
              Telefon: 0176 64279882
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@paltech.eu"
                className="text-blue-400 hover:underline"
              >
                info@paltech.eu
              </a>
            </p>
          </div>
  
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              DE350468635
            </p>
          </div>
  
          <div>
            <h2 className="mb-2 text-2xl font-semibold">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
  
          <div>
            <h2 className="mb-2 text-2xl font-semibold">
              Zentrale Kontaktstelle nach dem Digital Services Act (DSA)
            </h2>
  
            <p>
              Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11,
              12 DSA erreichen Sie wie folgt:
            </p>
  
            <p>
              E-Mail:{" "}
              <a
                href="mailto:info@paltech.eu"
                className="text-blue-400 hover:underline"
              >
                info@paltech.eu
              </a>
            </p>
  
            <p>
              Die für den Kontakt zur Verfügung stehenden Sprachen sind:
              Deutsch, Englisch, Spanisch.
            </p>
          </div>
  
          <div className="border-t border-zinc-700 pt-6 text-sm text-zinc-400">
            Quelle:{" "}
            <a
              href="https://www.e-recht24.de/impressum-generator.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              e-recht24 Impressum-Generator
            </a>
          </div>
        </div>
      </main>
    );
  }