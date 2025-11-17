import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-lg font-bold text-primary-foreground">
                  H
                </span>
              </div>
              <span className="text-lg font-semibold text-foreground">
                Hephaestus
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional track systems for explosive material transport in
              mining, quarry, and construction industries.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/our-products#anfo-track"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Anfo Track
                </Link>
              </li>
              <li>
                <Link
                  href="/our-products#emulsion-track"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Emulsion Track
                </Link>
              </li>
              <li>
                <Link
                  href="/our-products#unibody-track"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Unibody Track
                </Link>
              </li>
              <li>
                <Link
                  href="/our-products"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about-us"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="our-products"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Safety Standards
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Hephaestus. All rights reserved.
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
