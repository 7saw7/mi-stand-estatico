import React from 'react';
import Header from '@/components/Header';
import MainTitle from '@/components/Main/MainTitle';
import MainDescription from '@/components/Main/MainDescription';
import MainButton from '@/components/Main/MainButton';
import ServiceSlider from '@/components/Slider/ServiceSlider';


const Home: React.FC = () => {
  return (
    <>
      <Header variant="dark" />
      <main className="p-4 bg-[var(--color-azul-oscuro)]">
        {/* Aquí el slider */}
        <ServiceSlider />

        {/* La sección con los artículos */}
        <section className="max-w-7xl mx-auto py-8 px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: '¿Quiénes Somos?', desc: 'Más allá del código, somos tus aliados estratégicos. Nuestra pasión es entender tus desafíos y convertirlos en oportunidades con software y tecnología que realmente importan.' },
            { title: 'Misión', desc: 'Convertir ideas en realidades digitales que potencian el crecimiento y la eficiencia, siempre con un enfoque humano y cercano.' },
            { title: 'Visión', desc: 'Crear un ecosistema digital donde la innovación y la colaboración sean el motor que impulse negocios brillantes y responsables.' },
            { title: 'Valores', desc: 'Adaptamos procesos y soluciones con flexibilidad, pero siempre con un foco claro en los objetivos.' }
          ].map(({ title, desc }) => (
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
