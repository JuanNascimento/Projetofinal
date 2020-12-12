export class Dental {
    id: string;
    cidade :string;
    link: string;
    email:string;
    endereco: string;
    estado: string;
    nome:string;
    numero: string;
    telefone: string;
    
    setData(objFirebase: any){
        this.cidade = objFirebase.cidade;
        this.link = objFirebase.link;
        this.email = objFirebase.email;
        this.endereco = objFirebase.endereco;
        this.estado = objFirebase.estado;
        this.nome = objFirebase.nome;
        this.numero = objFirebase.numero;
        this.telefone = objFirebase.telefone
    }
    
    }