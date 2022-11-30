### Requirements ###
- Symfony 6.0^
- PHP 8.1^

### Start project ###
- php composer.phar install
- npm install
- php bin/console doctrine:database:create

### LexikJWT create auth key ###
- php bin/console lexik:jwt:generate-keypair