import { properties } from './constants'
import { Card } from './components'

const Cards = () => {
  return (
    <div>
        <div id="app" className="antialiased text-gray-900">
            <div className="bg-gray-200 min-h-screen p-8 flex flex-col justify-center">
                {properties.map((property) => (
                    <Card key={property.title} {...property} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Cards