const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');




// Função para gerar o arquivo de serviço
const generateServiceFile = (moduleName, serviceName) => {

    const serviceNameClass = serviceName.charAt(0).toUpperCase() + serviceName.slice(1);
  const serviceContent = `
import { Injectable } from "@nestjs/common";

@Injectable()
export class ${serviceNameClass}Service {

}
  `;

  // Função para verificar se o serviço já existe no módulo


  const serviceFileName = `./src/${moduleName}/${serviceName}.service.ts`;
  fs.writeFileSync(serviceFileName, serviceContent);
  console.log(`Created ${serviceFileName}`);
};

// Função para adicionar o serviço ao módulo
const addToModuleProviders = (moduleName, serviceName) => {

    
      
    const moduleFileName = `${moduleName}/${moduleName}.module.ts`;
    const fullPath = path.join('src', moduleFileName);
  
    try {
      let moduleContent = fs.readFileSync(fullPath, 'utf8');

      const serviceExistsInModule = (moduleContent, serviceName) => {
        const pattern = new RegExp(`\\b${serviceName}Service\\b`);
        return pattern.test(moduleContent);
      };

      if(serviceExistsInModule(moduleContent, serviceName)){
        console.log(`${serviceName}Service already exists in ${moduleName}.`);
        return;
      }
      
      const serviceNameClass = serviceName.charAt(0).toUpperCase() + serviceName.slice(1);
      // Adicione a importação do serviço ao início do arquivo
      const importStatement = `import { ${serviceNameClass}Service } from './${serviceName}.service';\n`;
      moduleContent = importStatement + moduleContent;
  
      // Verifique se já existe a opção 'providers' no módulo
      if (moduleContent.includes('providers')) {
        // Encontre a linha que contém "providers" e adicione o serviço lá
        moduleContent = moduleContent.replace(
          /providers:\s*\[[^\]]*\]/,
          (match) => {
            if (match.includes(serviceName)) {
              // O serviço já está na lista de providers, não adicionamos novamente
              return match;
            } else {
              // Verifique se a lista de providers está vazia
              if (match === 'providers: []') {
                // Se estiver vazia, adicione o serviço sem uma vírgula
                return `providers: [${serviceNameClass}Service]`;
              } else {
                // Caso contrário, adicione o serviço com uma vírgula
                return match.replace(']', `, ${serviceNameClass}Service]`);
              }
            }
          }
        );
      } else {
        // Se 'providers' não existir, crie-o com o serviço
        moduleContent = moduleContent.replace(
          /(\n\s*controllers:\s*\[[^\]]*\],)/,
          `$1\n  providers: [${serviceNameClass}Service],`
        );
      }
  
      fs.writeFileSync(fullPath, moduleContent);
      console.log(`Updated ${moduleFileName} providers`);
    } catch (error) {
      console.error(`Error updating ${moduleFileName}: ${error.message}`);
    }
  };
  
  
  
  

// Verifique se o argumento de serviço foi fornecido
const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error('Usage: node generate-service.js <module-name> <service-name>');
  process.exit(1);
}

const moduleName = args[0];
const serviceName = args[1];

// Gere o arquivo de serviço e atualize o módulo

generateServiceFile(moduleName, serviceName);
addToModuleProviders(moduleName, serviceName);
