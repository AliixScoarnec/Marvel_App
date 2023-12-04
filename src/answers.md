# GIT

## Quel est l'intérêt de commiter régulièrement et de manière atomique ?
```
Ca permet de sauvegarder, voir les modifications, d'avoir un travail propre, de pouvoir résoudre les problèmes plus facilement.
```

## A quoi sert une branche de type feature dans un développement logiciel de type git flow ?
```
C'est pour avoir une branche isolée pour ne pas affecter la branche main qui doit rester propre.
```

## Quelle est la différence entre une branche main et une branche develop ?
```
La branche main est la branche qui ne bouge pas, sur laquelle on ne fait pas de modification, on push simplement dessus et develop sert à faire les modifications. L'interêt est d'avoir une branche main propre.
```

## Quelle est la différence entre git add, git commit et git push ?
```
- Git add sert à AJOUTER des modifications
- Git commit sert à ENREGISTRER les modifications
- Git push sert à ENVOYER les git commit dans GitHub
```

# GITHUB
## Quel est l'intérêt d'une protection de branche ?
```
La protection de branche sert à prévenir les modifications que l'on ne veut pas en contrôlant qui peut modifier une branche spécifique dans le projet.
```

## Quel est l'intérêt d'une pull request ?
```
Ca sert à proposer des modifications de codes avant de les d'intégrer les modifications dans le projet principal.
```

# VERSIONNING
## Dans quel cas passer d'une version 1.0.0 à 1.0.1 ?
```
Quand on fait des corrections ou des petites modifications qui n'affectent pas le projet.
```

## Dans quel cas passer d'une version 1.0.0 à 1.1.0 ?
```
Quand on ajoute des nouvelles fonctionnalités dans l'application.
```

## A quoi sert une version release candidate ?
```
Ca sert à tester une version de l'application avant de l'envoyer dans le projet. Si elle n'est pas validée, on corrige les bugs.
```
# TEST
## Quel est l'intérêt des tests unitaires ?
```
Ca permet de vérifier si chaque partie de l'application fonctionne. Ca sert à voir les bugs et les corriger s'il y en a.
```