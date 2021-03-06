/**
 * LICENSE
 *
 Copyright 2015 Grégory Saive (greg@evias.be)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 * @package iMeals
 * @subpackage Controller
 * @author Grégory Saive <greg@evias.be>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @link https://imeals.parseapp.com
**/

module.exports = function(app)
{
  app.use(function(request, response, next) {
    var token = request.query.authToken;

    // XXX validate auth token for API access.
    if (true)
      next();
  });

  app.get('/', function(request, response) {

    var error   = request.query.error;
    var success = request.query.success;

    response.status(200).send({
      "version": response.locals.iMealsConfig.get("apiVersion")
    });
  });
}
