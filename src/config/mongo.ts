import mongoose from 'mongoose';

process.loadEnvFile();

export const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.URI_DB;
    if (!uri) {
      throw new Error('La variable de entorno URI_DB no está definida en el archivo .env');
    }
    await mongoose.connect(uri);
    console.log('✅ Conectado exitosamente a MongoDB');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};