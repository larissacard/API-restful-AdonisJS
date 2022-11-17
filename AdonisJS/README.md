#Moments API
API desenvolvida para projeto de conclusão do curso Angular 13 de Matheus Battisti.

![Badge Concluido](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

<div>
    <img src="https://img.shields.io/badge/adonisjs-%23220052.svg?style=for-the-badge&logo=adonisjs&logoColor=white"/>
    <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)"/>
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
</div>


#Menu
- [Sobre o Sistema](#sobre-o-sistema)
- [Funcionalidades](#funcionalidades)
- [Moments](#moments)
- [Comments](#moments)

## Sobre o Sistema
- API simula uma galeria com seus momentos mais marcantes onde diversos usuários podem fazer comentários em qualquer foto postada no sistema.
- Foi desenvolvido com [NodeJs](https://nodejs.org/en/), [Typescript](https://www.typescriptlang.org/),[AdonisJS](https://adonisjs.com/) e [SQLite](https://www.sqlite.org/index.html);

## Funcionalidades
- [x] Fazer upload de Imagens
- [x] Editar uploads feitos
- [x] Comentar em uploads feitos


## Moments

### POST de Moments
Usando o método POST podemos acessar o seguinte endereço:

`http://localhost:3333/v1moments`

É esperado as seguintes entradas:

```
    {
        "title": "",
        "description": "",
        "image": file
    }
```

Obs: Caso deseja utilizar essa rota em um software para teste de API como Insomnia ou Postman, use Multipart Form como opção para envio dos dados.


### GET Todos os Moments
Usando o método GET podemos acessar o seguinte endereço:

`http://localhost:3333/v1/moments`

O retorno esperado é um array com as seguintes informações:

    - Informações básicas
    - Todos os uploads de moments(fotos)
    - Um array em cada upload de moments com os comentarios daquele post

```
{
	"data": [
		{
			"id": 1,
			"title": "edit moment",
			"description": "edit description",
			"image": "02724363-694d-4008-b234-df2965d4cec5.jpg",
			"created_at": "2022-11-16T10:06:07.000-03:00",
			"updated_at": "2022-11-16T11:03:44.000-03:00",
			"comments": [
				{
					"id": 1,
					"username": "lali",
					"text": "alguma coisa aquiaa",
					"moment_id": 1,
					"created_at": "2022-11-17T09:16:13.000-03:00",
					"updated_at": "2022-11-17T09:16:13.000-03:00"
				}
			]
		},
		{
			"id": 2,
			"title": "algum titulo",
			"description": "alguma descricao",
			"image": null,
			"created_at": "2022-11-16T10:21:05.000-03:00",
			"updated_at": "2022-11-16T10:21:05.000-03:00",
			"comments": []
		}
	]
}
```

### GET de um Moments Especifico

Com o método GET podemos acessar a seguinte rota: 

`http://localhost:3333/v1/moments/:id`

O retorno esperado são as seguintes informações: 

    - Objeto com informações básicas daquele moments
    - Array com comentarios feitos nesse moments


```
{
	"data": {
		"id": 1,
		"title": "edit moment",
		"description": "edit description",
		"image": "02724363-694d-4008-b234-df2965d4cec5.jpg",
		"created_at": "2022-11-16T10:06:07.000-03:00",
		"updated_at": "2022-11-16T11:03:44.000-03:00",
		"comments": [
			{
				"id": 1,
				"username": "lali",
				"text": "alguma coisa aquiaa",
				"moment_id": 1,
				"created_at": "2022-11-17T09:16:13.000-03:00",
				"updated_at": "2022-11-17T09:16:13.000-03:00"
			}
		]
	}
}
    
```


## Comments

### POST de comments
Com o método POST é possivel acessar a seguinte rota:

`http://localhost:3333/v1/moments/1/comments`

É esperado as seguintes entradas:

```
    {
        "username": "",
        "text": ""
    }
```