import { companyService } from '../service';
import { 
  Navbar, 
  Hero, 
  ProductsSection, 
  AboutUs, 
  ClientsCarousel, 
  Footer 
} from '../ui/components';

export default async function Home() {
  const data = await companyService.getCompanyData();

  return (
    <div className="min-h-screen bg-white">
      <Navbar {...data.navbar} />
      <main>
        <Hero {...data.hero} />
        <ProductsSection products={data.products} />
        <AboutUs {...data.about} />
        <ClientsCarousel {...data.clients} />
      </main>
      <Footer {...data.footer} />
    </div>
  );
}
