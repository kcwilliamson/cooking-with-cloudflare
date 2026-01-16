import { Link } from 'react-router-dom';
import { allModuleCollections } from '../curriculumData';

export default function IndexPage() {
  const products = [
    'Workers',
    'Pages',
    'R2 Storage',
    'D1 Database',
    'Workers KV',
    'Durable Objects',
    'Queues',
    'Vectorize',
    'Hyperdrive',
    'Workers AI',
    'AI Gateway',
    'Stream',
    'Images',
    'Zaraz',
    'Turnstile',
    'WAF',
    'DDoS Protection',
    'Bot Management',
    'Zero Trust',
    'Access',
    'Gateway',
    'Browser Isolation',
    'WARP',
    'Magic WAN',
    'Magic Transit',
    'Spectrum',
    'Load Balancing',
    'Waiting Room',
    'SSL/TLS',
    'DNS',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Index</h1>
        <p className="text-lg text-gray-600">
          A comprehensive guide to all tutorials, modules, and Cloudflare products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 & 2: Modules and Tutorials */}
        <div className="md:col-span-2 space-y-10">
          {allModuleCollections.map((collection) => (
            <div key={collection.id} className="border-b border-gray-200 pb-8 last:border-b-0">
              <Link 
                to={`/module/${collection.id}`}
                className="group inline-block mb-4"
              >
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-cloudflare-orange transition-colors">
                  {collection.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-600 mb-4">{collection.description}</p>
              
              <ul className="space-y-2">
                {collection.tutorials.map((tutorial) => (
                  <li key={tutorial.id}>
                    <Link
                      to={`/tutorial/${tutorial.id}`}
                      className="text-gray-700 hover:text-cloudflare-orange transition-colors flex items-baseline gap-2"
                    >
                      <span className="text-cloudflare-orange">•</span>
                      <span className="flex-1">{tutorial.title}</span>
                      <span className="text-sm text-gray-500 whitespace-nowrap">{tutorial.totalTime}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Column 3: Products */}
        <div className="border-l border-gray-200 pl-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Products</h2>
          <ul className="space-y-2">
            {products.map((product) => (
              <li key={product}>
                <a
                  href={`https://developers.cloudflare.com/${product.toLowerCase().replace(/\s+/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-cloudflare-orange transition-colors block"
                >
                  {product}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
