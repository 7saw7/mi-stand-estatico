import React from 'react';
import Header from '@/components/Header';
import MainTitle from '@/components/Main/MainTitle';
import MainDescription from '@/components/Main/MainDescription';
import MainButton from '@/components/Main/MainButton';

const Home: React.FC = () => {
  return (
    <>
      <Header variant="light" />
      <main className="p-4">
        <section className="max-w-7xl mx-auto py-8 px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Servicio 1', desc: 'Descripción breve de lo que ofrece este servicio con enfoque en beneficios para el cliente.' },
            { title: 'Servicio 2', desc: 'Otra descripción para un servicio o producto destacado que deseas mostrar.' },
            { title: 'Contacto', desc: 'Información de contacto, horarios de atención o enlaces a redes sociales.' }
          ].map(({ title, desc }) => (
            <article key={title} className="block-base block-light">
              <MainTitle variant="light">{title}</MainTitle>
              <MainDescription variant="light">{desc}</MainDescription>
              <MainButton variant="light">Más información</MainButton>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
