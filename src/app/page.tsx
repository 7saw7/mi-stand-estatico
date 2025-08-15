import React from 'react';
import Header from '@/components/Header';
import ServiceCard from '@/components/Main/ServiceCard';
import ServiceSlider from '@/components/Slider/ServiceSlider';

const Home: React.FC = () => {
  const articles = [
    { title: 'Misión', desc: 'Convertir ideas en realidades digitales que potencian el crecimiento y la eficiencia, siempre con un enfoque humano y cercano.' },
    { title: 'Visión', desc: 'Crear un ecosistema digital donde la innovación y la colaboración sean el motor que impulse negocios brillantes y responsables.' },
    { title: 'Valores', desc: 'Adaptamos procesos y soluciones con flexibilidad, pero siempre con un foco claro en los objetivos.' }
  ];

  return (
    <>
      <Header variant="dark" />
      <main className="p-4 bg-[var(--color-azul-oscuro)]">
        {/* Slider */}
        <ServiceSlider />

        {/* Bloque '¿Quiénes Somos?' con fondo verde limón, borde negro y esquinas curvas */}
        <section className="max-w-7xl mx-auto mt-12 mb-10 px-6">
          <article className="block-base bg-green-900 border-2 border-black rounded-lg p-8 text-center">
            <ServiceCard
              title="¿Quiénes Somos?"
              description="Más allá del código, somos tus aliados estratégicos. <br />Nuestra pasión es entender tus desafíos y convertirlos en oportunidades con software y tecnología que realmente importan."
              variant="dark"
            />
          </article>
        </section>

        {/* Resto de artículos en grid */}
        <section className="max-w-7xl mx-auto py-8 px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map(({ title, desc }) => (
            <article key={title} className="block-base bg-[var(--color-verde)]">
              <ServiceCard
                variant="dark"
                title={title}
                description={desc}
              />
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
