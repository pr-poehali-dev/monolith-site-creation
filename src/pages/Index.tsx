import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className={`text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-[12vw] md:text-[10vw] font-heading font-bold tracking-tight text-black leading-none mb-8">
            МОНОЛИТ
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
            Единство формы в современном искусстве и дизайне
          </p>
        </div>
      </section>

      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-semibold text-black leading-tight">
              Философия<br />монолита
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Монолитность — это не просто эстетический выбор. Это философия целостности, 
              где форма и содержание сливаются в единое нерушимое целое.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              В эпоху фрагментации монолит напоминает о силе единства, о красоте 
              неделимого объекта, существующего вне времени.
            </p>
          </div>
          <div className="relative h-[600px] animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/24d9d1cb-776e-4117-9ed0-a7a5716c4363/files/6d53343a-b56b-4012-a8a4-eb5342246120.jpg" 
              alt="Монолитная скульптура" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-5xl md:text-6xl font-heading font-semibold text-black mb-16 text-center">
            Примеры монолитности
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden border-0 shadow-none hover:shadow-2xl transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/24d9d1cb-776e-4117-9ed0-a7a5716c4363/files/b72d2268-b7ca-407a-835c-c61f87c1a728.jpg" 
                  alt="Абстрактная форма" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-black mb-3">
                  Чистая форма
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Геометрическая простота как высшее проявление дизайна
                </p>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-none hover:shadow-2xl transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/24d9d1cb-776e-4117-9ed0-a7a5716c4363/files/0d9f7f2c-e88c-4a0a-95ff-314068f6e335.jpg" 
                  alt="Архитектурный монолит" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-black mb-3">
                  Брутализм
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Архитектурная честность через единство материала
                </p>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-none hover:shadow-2xl transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden bg-black flex items-center justify-center">
                <div className="w-32 h-32 bg-white"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-black mb-3">
                  Контраст
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Сила противопоставления создаёт целостность
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading font-semibold text-black mb-16 text-center">
            Принципы
          </h2>
          <div className="space-y-12">
            {[
              {
                number: '01',
                title: 'Единство',
                description: 'Неделимость формы как основа эстетики. Монолит не терпит компромиссов — это абсолютная целостность.'
              },
              {
                number: '02',
                title: 'Минимализм',
                description: 'Отказ от лишнего в пользу сути. Каждый элемент существует с определённой целью и не может быть удалён.'
              },
              {
                number: '03',
                title: 'Вневременность',
                description: 'Монолитные формы существуют вне моды и трендов. Это искусство, которое останется актуальным через десятилетия.'
              },
              {
                number: '04',
                title: 'Материальность',
                description: 'Честность материала и его свойств. Монолит не скрывает свою природу, а раскрывает её в полной мере.'
              }
            ].map((principle, index) => (
              <div 
                key={index}
                className="flex gap-8 items-start border-b border-gray-200 pb-12 last:border-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-6xl font-heading font-light text-gray-300 flex-shrink-0">
                  {principle.number}
                </span>
                <div>
                  <h3 className="text-3xl font-heading font-semibold text-black mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8">
            Монолит — это выбор
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-400 max-w-2xl mx-auto">
            Выбор целостности над фрагментацией.<br />
            Выбор сути над декорацией.<br />
            Выбор вечности над мимолётностью.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
