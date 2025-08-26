import Container from "@/components/Container/Container";
import LandingPageHeader from "@/components/LandingPageHeader/LandingPageHeader";
import Image from "next/image";
import DermisGenericImage from "../lib/assets/dermis-generic.webp";
import { CameraIcon, BarChartIcon, PersonIcon } from "@radix-ui/react-icons";
import LandingPageFeatureCard from "@/components/LandingPageFeatureCard/LandingPageFeatureCard";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main>
      <LandingPageHeader />

      <section aria-labelledby="hero-heading" className="my-auto mx-0">
        <Container>
          <div className="min-h-[70vh] flex items-center justify-between notebook:justify-around tablet:flex-col gap-8 mt-10 smartphone:flex-col gap-8 mt-10">
            <div className="w-[45%] tablet:w-[80%] mb-14 smartphone:w-[85%] mb-14">
              <h2
                id="hero-heading"
                className="text-5xl font-bold text-black mb-4 smartphone:text-4xl"
              >
                Uma forma mais inteligente de acompanhar a{" "}
                <span className="text-primary">
                  evolução dos seus pacientes.
                </span>
              </h2>
              <p className="text-grey text-xl mt-8 smartphone:text-lg">
                A Dermis ajuda profissionais da saúde a documentar, monitorar e
                prescrever tratamentos com registros visuais e anotações
                clínicas.
              </p>
              <div className="mt-12 flex gap-8 smartphone:justify-center flex-wrap gap-6 tablet:justify-center gap-6">
                <button
                  className="
                  w-[210px] h-[54px] 
                  bg-primary text-background 
                  rounded-2xl font-bold text-lg
                  transition-colors duration-300
                  hover:bg-background hover:text-primary hover:border-primary hover:border-[1px]"
                  type="button"
                >
                  Iniciar teste grátis
                </button>

                <button
                  className="
                  w-[170px] h-[54px] 
                  text-primary bg-background 
                  rounded-2xl font-bold text-lg border-primary border-[1px]
                  transition-colors duration-300
                  hover:bg-primary hover:text-background hover:border-transparent"
                  type="button"
                >
                  Ver planos
                </button>
              </div>
            </div>

            <div
              className="rotate-[0.25rad] relative shadow-[-2px_8px_10px_15px_rgba(0,_0,_0,_0.1)] flex justify-center items-center rounded-lg flex-2 px-4 py-4 smartphone:w-[85%]"
              role="presentation"
            >
              <Image
                role="presentation"
                src={DermisGenericImage}
                alt=""
                className="rounded-md"
              />
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="features-section" className="my-28">
        <Container>
          <h2
            id="features-section"
            className="text-4xl font-bold text-black text-center mb-4 smartphone:text-3xl"
          >
            Tudo o que você precisa para o gerenciamento do cuidado com seus
            pacientes.
          </h2>
          <p className="text-grey text-xl text-center mt-2 smartphone:text-lg">
            Otimize seu fluxo de trabalho com nosso conjunto completo de
            ferramentas desenvolvidas especialmente para profissionais da saúde.
          </p>

          <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-16 mt-16 text-black">
            <LandingPageFeatureCard
              title="Registro visual"
              paragraph="Documente e acompanhe a evolução do tratamento com registros visuais de alta qualidade."
              Icon={CameraIcon}
            />
            <LandingPageFeatureCard
              title="Monitoramento de progresso"
              paragraph="Acompanhe de forma centralizada a evolução do tratamento de seus pacientes."
              Icon={BarChartIcon}
            />
            <LandingPageFeatureCard
              title="Gestão de pacientes"
              paragraph="Todas as informações dos seus pacientes organizadas em um só lugar."
              Icon={PersonIcon}
            />
          </ul>
        </Container>
      </section>
    </main>
  );
}
