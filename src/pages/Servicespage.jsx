import React from 'react';

const Services = () => {
    return (
        <div className="font-sans bg-gray-50 text-gray-800">
            
            {/* Page Header */}
            <section className="hero-bg text-white py-16 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Shipping Services</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">Premium logistics solutions designed for clients who value precision, security, and exceptional service.</p>
                    <div className="mt-8 flex justify-center">
                        <div className="inline-flex rounded-lg bg-white/10 p-1">
                            <a href="#core-services" className="px-4 py-2 rounded-md hover:bg-white/20 transition">Core Services</a>
                            <a href="#specialized" className="px-4 py-2 rounded-md hover:bg-white/20 transition">Specialized</a>
                            <a href="#process" className="px-4 py-2 rounded-md hover:bg-white/20 transition">Our Process</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Comprehensive Shipping Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">At Anand Shipping, we offer a range of premium logistics services tailored to meet the unique needs of our clients. From express delivery to specialized handling, we ensure your shipments receive the care and attention they deserve.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-shipping-fast text-primary-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-primary-800 mb-3">Fast & Reliable</h3>
                            <p className="text-gray-600">Express delivery with guaranteed timeframes and real-time tracking.</p>
                        </div>
                        
                        <div className="text-center p-6">
                            <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-shield-alt text-accent-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-primary-800 mb-3">Secure & Protected</h3>
                            <p className="text-gray-600">Multi-layered security protocols for your valuable shipments.</p>
                        </div>
                        
                        <div className="text-center p-6">
                            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-headset text-primary-600 text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-primary-800 mb-3">Dedicated Support</h3>
                            <p className="text-gray-600">Personalized service with dedicated account managers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services Section */}
            <section id="core-services" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Core Shipping Services</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our comprehensive range of premium logistics solutions</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Service 1 */}
                        <div className="service-card bg-white rounded-xl p-8 card-hover border border-gray-100 shadow-sm">
                            <div className="flex items-start mb-6">
                                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center service-icon">
                                    <i className="fas fa-rocket text-primary-600 text-2xl"></i>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-2xl font-bold text-primary-800 mb-2">Priority Express Delivery</h3>
                                    <div className="inline-flex items-center bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-medium">
                                        <i className="fas fa-bolt mr-1"></i> Most Popular
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6">Expedited domestic and international delivery with premium handling and guaranteed timeframes for your urgent shipments.</p>
                            
                            <div className="mb-6">
                                <h4 className="font-bold text-primary-800 mb-3">Key Features</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Express domestic & international delivery
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Guaranteed delivery timeframes
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Priority handling throughout transit
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Real-time tracking with proactive updates
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-2xl font-bold text-primary-800">From $49</span>
                                    <span className="text-gray-500 text-sm ml-2">per shipment</span>
                                </div>
                                <button className="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="service-card bg-white rounded-xl p-8 card-hover border border-gray-100 shadow-sm">
                            <div className="flex items-start mb-6">
                                <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center service-icon">
                                    <i className="fas fa-hands text-accent-600 text-2xl"></i>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-2xl font-bold text-primary-800 mb-2">White-Glove Handling</h3>
                                    <div className="inline-flex items-center bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                                        <i className="fas fa-gem mr-1"></i> Premium Service
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6">Specialized care for luxury, fragile, and high-value items with dedicated handlers and customized transport solutions.</p>
                            
                            <div className="mb-6">
                                <h4 className="font-bold text-primary-800 mb-3">Key Features</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Luxury item specialists with certification
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Custom transport solutions for fragile items
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Temperature and humidity-controlled vehicles
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        In-person handoff at both origin and destination
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-2xl font-bold text-primary-800">From $199</span>
                                    <span className="text-gray-500 text-sm ml-2">per shipment</span>
                                </div>
                                <button className="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="service-card bg-white rounded-xl p-8 card-hover border border-gray-100 shadow-sm">
                            <div className="flex items-start mb-6">
                                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center service-icon">
                                    <i className="fas fa-user-secret text-primary-600 text-2xl"></i>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-2xl font-bold text-primary-800 mb-2">Confidential Logistics</h3>
                                    <div className="inline-flex items-center bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-medium">
                                        <i className="fas fa-shield-alt mr-1"></i> Secure Service
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6">Discreet and secure logistics for sensitive documents and confidential materials with enhanced privacy protocols.</p>
                            
                            <div className="mb-6">
                                <h4 className="font-bold text-primary-800 mb-3">Key Features</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Tamper-evident packaging and seals
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Discreet labeling and packaging
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Background-checked dedicated handlers
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Secure chain of custody documentation
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-2xl font-bold text-primary-800">From $89</span>
                                    <span className="text-gray-500 text-sm ml-2">per shipment</span>
                                </div>
                                <button className="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="service-card bg-white rounded-xl p-8 card-hover border border-gray-100 shadow-sm">
                            <div className="flex items-start mb-6">
                                <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center service-icon">
                                    <i className="fas fa-box-open text-accent-600 text-2xl"></i>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-2xl font-bold text-primary-800 mb-2">Elite Protective Packaging</h3>
                                    <div className="inline-flex items-center bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                                        <i className="fas fa-award mr-1"></i> Premium Service
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6">Premium protective packaging materials and techniques designed to preserve and protect your valuable items during transit.</p>
                            
                            <div className="mb-6">
                                <h4 className="font-bold text-primary-800 mb-3">Key Features</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Custom packaging solutions for each item
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Premium protective materials
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Climate-controlled packaging options
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-primary-500 mr-2"></i>
                                        Luxury unboxing experience design
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-2xl font-bold text-primary-800">From $0</span>
                                    <span className="text-gray-500 text-sm ml-2">with service</span>
                                </div>
                                <button className="px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Services */}
            <section id="specialized" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Specialized Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Custom shipping experiences for unique requirements and industries</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Specialized Service 1 */}
                        <div className="bg-white rounded-xl p-6 card-hover border border-gray-100 shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-4 service-icon">
                                <i className="fas fa-snowflake text-primary-600 text-xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-primary-800 mb-3">Temperature Control</h3>
                            <p className="text-gray-600 mb-4">Climate-controlled shipping for temperature-sensitive items including pharmaceuticals, perishables, and specialty chemicals.</p>
                            <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                                <li className="flex items-center">
                                    <i className="fas fa-check text-primary-500 mr-2 text-xs"></i>
                                    Refrigerated (2-8°C) and frozen (-20°C) options
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-primary-500 mr-2 text-xs"></i>
                                    Continuous temperature monitoring
                                </li>
                            </ul>
                            <button className="text-primary-600 font-medium hover:text-primary-700 transition flex items-center text-sm">
                                Explore options
                                <i className="fas fa-arrow-right ml-1 text-xs"></i>
                            </button>
                        </div>

                        {/* Specialized Service 2 */}
                        <div className="bg-white rounded-xl p-6 card-hover border border-gray-100 shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-accent-100 flex items-center justify-center mb-4 service-icon">
                                <i className="fas fa-globe-americas text-accent-600 text-xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-primary-800 mb-3">Global Express</h3>
                            <p className="text-gray-600 mb-4">Expedited international shipping with customs clearance assistance and global tracking for time-sensitive international deliveries.</p>
                            <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                                <li className="flex items-center">
                                    <i className="fas fa-check text-primary-500 mr-2 text-xs"></i>
                                    Customs brokerage included
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-primary-500 mr-2 text-xs"></i>
                                    Global tracking with ETA updates
                                </li>
                            </ul>
                            <button className="text-primary-600 font-medium hover:text-primary-700 transition flex items-center text-sm">
                                Explore options
                                <i className="fas fa-arrow-right ml-1 text-xs"></i>
                            </button>
                        </div>

                        {/* Specialized Service 3 */}
                        <div className="bg-white rounded-xl p-6 card-hover border border-gray-100 shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-4 service-icon">
                                <i className="fas fa-tools text-primary-600 text-xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-primary-800 mb-3">Assembly & Installation</h3>
                            <p className="text-gray-600 mb-4">End-to-end service including delivery, assembly, and installation of furniture, equipment, and display items at destination.</p>
                            <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                                <li className="flex items-center">
                                    <i className="fas fa-check text-primary-500 mr-2 text-xs"></i>
                                    Professional assembly services
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-primary-500 mr-2 text-xs"></i>
                                    Installation and setup
                                </li>
                            </ul>
                            <button className="text-primary-600 font-medium hover:text-primary-700 transition flex items-center text-sm">
                                Explore options
                                <i className="fas fa-arrow-right ml-1 text-xs"></i>
                            </button>
                        </div>

                        {/* Specialized Service 4 */}
                        <div className="bg-white rounded-xl p-6 card-hover border border-gray-100 shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-accent-100 flex items-center justify-center mb-4 service-icon">
                                <i className="fas fa-warehouse text-accent-600 text-xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-primary-800 mb-3">Secure Storage</h3>
                            <p className="text-gray-600 mb-4">Short-term secure storage solutions with climate control and advanced security for items awaiting final delivery or transfer.</p>
                            <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                                <li className="flex items-center">
                                    <i className="fas fa-check text-primary-500 mr-2 text-xs"></i>
                                    Climate-controlled facilities
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-primary-500 mr-2 text-xs"></i>
                                    24/7 security monitoring
                                </li>
                            </ul>
                            <button className="text-primary-600 font-medium hover:text-primary-700 transition flex items-center text-sm">
                                Explore options
                                <i className="fas fa-arrow-right ml-1 text-xs"></i>
                            </button>
                        </div>

                        {/* Specialized Service 5 */}
                        <div className="bg-white rounded-xl p-6 card-hover border border-gray-100 shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-4 service-icon">
                                <i className="fas fa-headset text-primary-600 text-xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-primary-800 mb-3">Concierge Support</h3>
                            <p className="text-gray-600 mb-4">Luxury-level customer support with dedicated account managers and personalized coordination for your shipments.</p>
                            <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                                <li className="flex items-center">
                                    <i className="fas fa-check text-primary-500 mr-2 text-xs"></i>
                                    Dedicated account manager
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-primary-500 mr-2 text-xs"></i>
                                    24/7 priority support line
                                </li>
                            </ul>
                            <button className="text-primary-600 font-medium hover:text-primary-700 transition flex items-center text-sm">
                                Explore options
                                <i className="fas fa-arrow-right ml-1 text-xs"></i>
                            </button>
                        </div>

                        {/* Specialized Service 6 */}
                        <div className="bg-white rounded-xl p-6 card-hover border border-gray-100 shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-accent-100 flex items-center justify-center mb-4 service-icon">
                                <i className="fas fa-map-marked-alt text-accent-600 text-xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-primary-800 mb-3">Real-Time Tracking</h3>
                            <p className="text-gray-600 mb-4">Advanced tracking with personalized updates and notifications to keep you informed throughout the delivery process.</p>
                            <ul className="text-gray-600 space-y-2 mb-6 text-sm">
                                <li className="flex items-center">
                                    <i className="fas fa-check text-primary-500 mr-2 text-xs"></i>
                                    Live GPS tracking
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-check text-primary-500 mr-2 text-xs"></i>
                                    Proactive delay notifications
                                </li>
                            </ul>
                            <button className="text-primary-600 font-medium hover:text-primary-700 transition flex items-center text-sm">
                                Explore options
                                <i className="fas fa-arrow-right ml-1 text-xs"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Our Shipping Process</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">A seamless, transparent process designed for premium service delivery</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                                <span className="text-primary-800 font-bold text-xl">1</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary-800 mb-2">Consultation</h3>
                            <p className="text-gray-600">Personalized assessment of your shipping needs with our logistics experts.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-4">
                                <span className="text-primary-800 font-bold text-xl">2</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary-800 mb-2">Custom Packaging</h3>
                            <p className="text-gray-600">Elite-grade protective packaging tailored to your specific items and requirements.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                                <span className="text-primary-800 font-bold text-xl">3</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary-800 mb-2">Secure Transport</h3>
                            <p className="text-gray-600">Priority handling with real-time tracking and constant monitoring throughout transit.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-4">
                                <span className="text-primary-800 font-bold text-xl">4</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary-800 mb-2">Delivery & Confirmation</h3>
                            <p className="text-gray-600">White-glove delivery with confirmation and follow-up to ensure complete satisfaction.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Comparison */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Service Comparison</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find the perfect shipping solution for your needs</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-primary-200">
                                    <th className="py-4 px-6 text-left text-primary-800 font-bold">Service Features</th>
                                    <th className="py-4 px-6 text-center">
                                        <div className="font-bold text-primary-800">Priority Delivery</div>
                                        <div className="text-sm text-gray-500 font-normal">Fast & Reliable</div>
                                    </th>
                                    <th className="py-4 px-6 text-center">
                                        <div className="font-bold text-primary-800">White-Glove</div>
                                        <div className="text-sm text-gray-500 font-normal">Luxury Handling</div>
                                    </th>
                                    <th className="py-4 px-6 text-center">
                                        <div className="font-bold text-primary-800">Confidential</div>
                                        <div className="text-sm text-gray-500 font-normal">Secure & Discreet</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100">
                                    <td className="py-4 px-6 text-gray-700">Delivery Timeframe</td>
                                    <td className="py-4 px-6 text-center">1-3 days</td>
                                    <td className="py-4 px-6 text-center">2-5 days</td>
                                    <td className="py-4 px-6 text-center">1-4 days</td>
                                </tr>
                                <tr className="border-b border-gray-100 bg-gray-50">
                                    <td className="py-4 px-6 text-gray-700">Real-Time Tracking</td>
                                    <td className="py-4 px-6 text-center"><i className="fas fa-check text-primary-500"></i></td>
                                    <td className="py-4 px-6 text-center"><i className="fas fa-check text-primary-500"></i></td>
                                    <td className="py-4 px-6 text-center"><i className="fas fa-check text-primary-500"></i></td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-4 px-6 text-gray-700">Insurance Coverage</td>
                                    <td className="py-4 px-6 text-center">Up to $5,000</td>
                                    <td className="py-4 px-6 text-center">Up to $100,000</td>
                                    <td className="py-4 px-6 text-center">Up to $25,000</td>
                                </tr>
                                <tr className="border-b border-gray-100 bg-gray-50">
                                    <td className="py-4 px-6 text-gray-700">Dedicated Handler</td>
                                    <td className="py-4 px-6 text-center"><i className="fas fa-times text-gray-400"></i></td>
                                    <td className="py-4 px-6 text-center"><i className="fas fa-check text-primary-500"></i></td>
                                    <td className="py-4 px-6 text-center"><i className="fas fa-check text-primary-500"></i></td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-4 px-6 text-gray-700">Temperature Control</td>
                                    <td className="py-4 px-6 text-center"><i className="fas fa-times text-gray-400"></i></td>
                                    <td className="py-4 px-6 text-center"><i className="fas fa-check text-primary-500"></i></td>
                                    <td className="py-4 px-6 text-center"><i className="fas fa-times text-gray-400"></i></td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 text-gray-700">Starting Price</td>
                                    <td className="py-4 px-6 text-center font-bold text-primary-800">$49</td>
                                    <td className="py-4 px-6 text-center font-bold text-primary-800">$199</td>
                                    <td className="py-4 px-6 text-center font-bold text-primary-800">$89</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 hero-bg text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Shipping?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Let us handle your valuable shipments with the care and precision they deserve.</p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="px-8 py-3 bg-accent-500 text-white font-bold rounded-lg hover:bg-accent-600 transition flex items-center justify-center">
                            <i className="fas fa-calendar-plus mr-2"></i>Schedule a Pickup
                        </button>
                        <button className="px-8 py-3 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition flex items-center justify-center">
                            <i className="fas fa-phone-alt mr-2"></i>Speak to an Expert
                        </button>
                    </div>
                    <p className="mt-6 text-blue-200">Or call us directly at <span className="font-bold">+91 98765 43210</span></p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold">A</div>
                                <span className="ml-2 text-xl font-bold">Anand Shipping</span>
                            </div>
                            <p className="text-gray-400 mb-4">Bringing a new level of sophistication to logistics with precision, privacy, and premium care.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Priority Delivery</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">White-Glove Handling</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Confidential Shipments</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Elite Packaging</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-center">
                                    <i className="fas fa-map-marker-alt mr-2 text-accent-500"></i>
                                    Global Headquarters, Mumbai
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-phone-alt mr-2 text-accent-500"></i>
                                    +91 98765 43210
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-envelope mr-2 text-accent-500"></i>
                                    info@anandshipping.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2023 Anand Shipping. All rights reserved. Prestige in every parcel. Excellence in every delivery.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Services;