import React from 'react';
import Header from '@/components/Header';
import MainTitle from '@/components/Main/MainTitle';
import MainDescription from '@/components/Main/MainDescription';
import MainButton from '@/components/Main/MainButton';
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
          <article className="bg-green-900 border-2 border-black rounded-lg p-8 text-center">
            <MainTitle variant="dark">
              <p className="mb-6 text-center">
              ¿Quiénes Somos?
              </p>
              </MainTitle>
            <div className="mb-6 text-center">
            <MainDescription variant="dark">
                Más allá del código, somos tus aliados estratégicos. <br />Nuestra pasión es entender tus desafíos y convertirlos en oportunidades con software y tecnología que realmente importan.
            </MainDescription>
            </div>
            <MainButton variant="dark">Más información</MainButton>
          </article>
        </section>

        {/* Resto de artículos en grid */}
        <section className="max-w-7xl mx-auto py-8 px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map(({ title, desc }) => (
            <article key={title} className="block-base bg-[var(--color-verde)]">
              <MainTitle variant="dark">{title}</MainTitle>
              <MainDescription variant="dark">{desc}</MainDescription>
              <MainButton variant="dark">Más información</MainButton>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
