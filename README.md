Application in development which will help you to compute how many bucks each personn of a group owe you for the last event you went together

toDo :
- sur remove d'un friend, remove les share dans la list byId et alls
- sur remove d'un friend, remove ses shares dans les payements
- design (en cours)
  - 5 premier users affiché sur la page + le nombre en plus
  - design des inputs text  
- FIX : affichage du project id et list des users des que l'on a sauvegarder le projet
- Header button to copy project id to share it
- ajouter des tests unitaire ( notamment sur le calcul de l'account )

Firebase structure :
  - users
    - projects : tableau avec les keys des projects auquel il participe
    - currentProjects : id du projet actuel;
  - project
    - users : tableau des users qui participent au projet
    - data : data du projet

To develop :
  - backend:
    - bdd
    - actions
      - save  
      - listAll
      - getVersion
  - front :
    - undo/redo
    - save
    - listAll
    - getVersion

Store :
 - friends : {id, label}
 - payements : { id, label, cost paidById, shares : [] }
 - shares : {id, payementId, owedById, weight}

Actions :
  - Add friend
  - Remove friend
  - Add Payement
  - Remove Payement
  - Set payementLabel
  - Set payementSum
  - Add share
  - Set share weight
  - Remove share

Containers :
 - Friends : fourni la liste des users et les interactions
 - Payements : fourni la liste des payements et les interactions
 - Accounts : fourni la somme payée, la somme due par user
 - AddFriend : container pour ajouter un user
 - AddPayement : container pour ajouter un payement

Component :
  - App
    - FriendList
      - Friend
      - AddFriend (container)
    - PayementList
      - Payement
        - ShareList
          - Share
      - AddPayement (container)
    - Accounts
