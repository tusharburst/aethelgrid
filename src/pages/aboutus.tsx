import { motion } from 'framer-motion';
import { Users, Zap, Shield, Heart } from 'lucide-react';

// Company Values Data
const coreValues = [
    { icon: Zap, title: 'Performance', description: 'We are obsessed with speed and low latency to deliver the best experience.' },
    { icon: Shield, title: 'Security', description: 'Keeping your servers and data secure is our top priority.' },
    { icon: Heart, title: 'Customer Support', description: 'Clear support paths and practical guidance for your hosting questions.' },
    { icon: Users, title: 'Community', description: 'We build more than just a service; we build a community.' },
];

const AboutUs = () => {
    return (
        <div className="min-h-screen text-white" style={{ backgroundImage: `url('/background.png')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="container mx-auto px-4 py-20 pt-32">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.7 }} 
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">About <span className="text-blue-400">AethelGrid</span></h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Providing high-performance hosting solutions with leading technology for developers, gamers, and businesses worldwide.
                    </p>
                </motion.div>

                {/* Our Mission */}
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Our Mission
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-gray-400 max-w-4xl mx-auto leading-relaxed"
                    >
                        Our mission is to empower creativity and innovation by providing reliable, fast, and secure server infrastructure. We believe that everyone deserves access to high-quality hosting without compromising on performance or security. At AethelGrid, our goal is to make hosting approachable for developers and communities at every stage.
                    </motion.p>
                </div>

                {/* Our Values */}
                <div>
                    <motion.h2 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-10"
                    >
                        Our Core Values
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <motion.div 
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-center border border-gray-700"
                            >
                                <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                                <p className="text-gray-400 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;