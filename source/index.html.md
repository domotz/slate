---
title: Domotz Public API
language_tabs:
  - shell: Curl
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - python: Python
  - ruby: Ruby
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="domotz-public-api">Domotz Public API v0.8.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Domotz Public API.

Get your API Key and Base URL from the Domotz Portal or contact us.

The Domotz Public API uses standard HTTP response codes, authentication, and verbs. JSON format is used in responses and accepted for request bodies. All date-time formats are expressed as yyyy-mm-ddThh:mm:ss. Date-time must be expressed in UTC. Specification of different TimeZones are not allowed.

Base URLs:

* <a href="your-domotz-api-endpoint/public-api/v1/">your-domotz-api-endpoint/public-api/v1/</a>

<a href="https://www.domotz.com/terms-and-conditions/">Terms of service</a>
Email: <a href="mailto:support@domotz.com">API Support</a> 

# Authentication

* API Key (api_key)
    - Parameter Name: **X-Api-Key**, in: header. Get you API Key from the Domotz Portal or contact us

<h1 id="domotz-public-api-agent">agent</h1>

## listAgents

<a id="opIdlistAgents"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent`</span>

Returns the agents list

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listagents-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer(int32)|false|The maximum number of items to return|
|page_number|query|integer(int32)|false|The requested page number, 0-indexed|
|display_name|query|string|false|Consider only agents with `display_name` containing the string (case insensitive)|
|team_name|query|string|false|Filters by team name (companies only)|

> Example responses

> 200 Response

```json
[
  {
    "access_right": {
      "api_enabled": true,
      "granting_user": {
        "name": "user@example.com"
      },
      "status": "OWNED"
    },
    "creation_time": "2019-08-24T14:15:22Z",
    "display_name": "string",
    "id": 0,
    "licence": {
      "activation_time": "2019-08-24T14:15:22Z",
      "bound_mac_address": "string",
      "code": "string",
      "expiration_time": "2019-08-24T14:15:22Z",
      "id": 0
    },
    "status": {
      "last_change": "2019-08-24T14:15:22Z",
      "value": "ONLINE"
    },
    "team": {
      "area": {
        "id": 0
      },
      "id": 0,
      "leader_id": 0,
      "name": "string"
    },
    "timezone": "string",
    "version": {
      "agent": "string",
      "package": "string"
    }
  }
]
```

<h3 id="listagents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The agent list|Inline|

<h3 id="listagents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[AgentBase](#schemaagentbase)]|false|none|
|» access_right|object|false|none|
|»» api_enabled|boolean|false|If `false` the agent plan doesn't allow for API access: you only can see this agent in the list|
|»» granting_user|object|false|none|
|»»» name|string(email)|false|none|
|»» status|string|false|<ul><li> *OWNED*: you own this agent </li><li> *PROPOSED*: the owner proposed you to access the agent, you can accept or reject the offer </li><li> *GRANTED*: you accepted the collaboration request for this agent </li><li> *ASSIGNED*: your team leader has given you access to the agent </li></ul>|
|» creation_time|string(date-time)|false|none|
|» display_name|string|true|none|
|» id|integer(int32)|true|none|
|» licence|object|false|none|
|»» activation_time|string(date-time)|false|none|
|»» bound_mac_address|string|false|The MAC address of the primary interface of the device the software agent runs on|
|»» code|string|false|none|
|»» expiration_time|string(date-time)|false|none|
|»» id|integer(int32)|false|none|
|» status|object|false|none|
|»» last_change|string(date-time)|false|none|
|»» value|string|false|none|
|» team|object|false|The Team and Company Area information, only available for companies|
|»» area|object|false|none|
|»»» id|integer(int32)|false|none|
|»» id|integer(int32)|false|none|
|»» leader_id|integer(int32)|false|none|
|»» name|string|false|none|
|» timezone|string|false|none|
|» version|object|false|none|
|»» agent|string|false|none|
|»» package|string|false|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OWNED|
|status|GRANTED|
|status|PROPOSED|
|status|ASSIGNED|
|value|ONLINE|
|value|OFFLINE|

## countAgents

<a id="opIdcountAgents"></a>

> Code samples

```shell
curl -X HEAD your-domotz-api-endpoint/public-api/v1/agent \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent',
  method: 'head',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent',
{
  method: 'HEAD',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'X-Api-Key': 'API_KEY'
}

r = requests.head('your-domotz-api-endpoint/public-api/v1/agent', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.head 'your-domotz-api-endpoint/public-api/v1/agent',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("HEAD", "your-domotz-api-endpoint/public-api/v1/agent", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`HEAD /agent`</span>

Counts the agents

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X HEAD</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="countagents-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|display_name|query|string|false|Consider only agents with `display_name` containing the string (case insensitive)|
|team_name|query|string|false|Filters by team name (companies only)|

<h3 id="countagents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|The number of agents matching the filtering criteria|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-Entities-Count|integer|int32|The number of agents matching the filtering criteria|

## deleteAgent

<a id="opIddeleteAgent"></a>

> Code samples

```shell
curl -X DELETE your-domotz-api-endpoint/public-api/v1/agent/{agent_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'X-Api-Key': 'API_KEY'
}

r = requests.delete('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}`</span>

Deletes an agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deleteagent-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

<h3 id="deleteagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## getAgent

<a id="opIdgetAgent"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id} \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}`</span>

Returns the details of an agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id} \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagent-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
{
  "access_right": {
    "api_enabled": true,
    "granting_user": {
      "name": "user@example.com"
    },
    "status": "OWNED"
  },
  "creation_time": "2019-08-24T14:15:22Z",
  "display_name": "string",
  "id": 0,
  "licence": {
    "activation_time": "2019-08-24T14:15:22Z",
    "bound_mac_address": "string",
    "code": "string",
    "expiration_time": "2019-08-24T14:15:22Z",
    "id": 0
  },
  "status": {
    "last_change": "2019-08-24T14:15:22Z",
    "value": "ONLINE"
  },
  "team": {
    "area": {
      "id": 0
    },
    "id": 0,
    "leader_id": 0,
    "name": "string"
  },
  "timezone": "string",
  "version": {
    "agent": "string",
    "package": "string"
  },
  "listen_on": "string",
  "location": {
    "latitude": "string",
    "longitude": "string"
  }
}
```

<h3 id="getagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The agent|[AgentDetail](#schemaagentdetail)|

## getConnectionConsumption

<a id="opIdgetConnectionConsumption"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/connection/consumption \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/connection/consumption',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/connection/consumption',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/connection/consumption', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/connection/consumption',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/connection/consumption", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/connection/consumption`</span>

Get the connection consumption on the given agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/connection/consumption \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getconnectionconsumption-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
{
  "current": 0,
  "limit": 0
}
```

<h3 id="getconnectionconsumption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ConnectionConsumption](#schemaconnectionconsumption)|

<h1 id="domotz-public-api-device">device</h1>

## deleteDownDevices

<a id="opIddeleteDownDevices"></a>

> Code samples

```shell
curl -X DELETE your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'X-Api-Key': 'API_KEY'
}

r = requests.delete('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/device`</span>

Deletes all the DOWN devices of *IP* protocol

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deletedowndevices-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

<h3 id="deletedowndevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## listDevices

<a id="opIdlistDevices"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device`</span>

Returns all the devices of an agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listdevices-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|show_hidden|query|boolean|false|Whether to include hidden devices in the returned list|

> Example responses

> 200 Response

```json
[
  {
    "authentication_status": "AUTHENTICATED",
    "details": {
      "room": "string",
      "snmp_read_community": "string",
      "snmp_write_community": "string",
      "zone": "string"
    },
    "display_name": "string",
    "first_seen_on": "2019-08-24T14:15:22Z",
    "id": 0,
    "importance": "VITAL",
    "main_id": 0,
    "protocol": "IP",
    "type": {
      "detected_id": 0,
      "id": 0
    },
    "user_data": {
      "model": "string",
      "name": "string",
      "type": 0,
      "vendor": "string"
    }
  }
]
```

<h3 id="listdevices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of all devices in the Agent's monitored networks|Inline|

<h3 id="listdevices-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|authentication_status|AUTHENTICATED|
|authentication_status|NO_AUTHENTICATION|
|authentication_status|PENDING|
|authentication_status|REQUIRED|
|authentication_status|WRONG_CREDENTIALS|
|importance|VITAL|
|importance|FLOATING|
|protocol|IP|
|protocol|DUMMY|
|protocol|IP_EXTERNAL|
|status|ONLINE|
|status|OFFLINE|
|status|DOWN|
|status|HIDDEN|

## deleteDevice

<a id="opIddeleteDevice"></a>

> Code samples

```shell
curl -X DELETE your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'X-Api-Key': 'API_KEY'
}

r = requests.delete('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/device/{device_id}`</span>

Deletes a device, whether ONLINE, OFFLINE or DOWN . If a device  is deleted while online, it may reappear when rediscovered automatically

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deletedevice-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|

<h3 id="deletedevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## getDevice

<a id="opIdgetDevice"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id} \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}`</span>

Returns the details of a device

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id} \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getdevice-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|

> Example responses

> 200 Response

```json
{
  "authentication_status": "AUTHENTICATED",
  "details": {
    "room": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "protocol": "IP",
  "type": {
    "detected_id": 0,
    "id": 0
  },
  "user_data": {
    "model": "string",
    "name": "string",
    "type": 0,
    "vendor": "string"
  }
}
```

<h3 id="getdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An object containing the device details|Inline|

<h3 id="getdevice-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|authentication_status|AUTHENTICATED|
|authentication_status|NO_AUTHENTICATION|
|authentication_status|PENDING|
|authentication_status|REQUIRED|
|authentication_status|WRONG_CREDENTIALS|
|importance|VITAL|
|importance|FLOATING|
|protocol|IP|
|protocol|DUMMY|
|protocol|IP_EXTERNAL|
|status|ONLINE|
|status|OFFLINE|
|status|DOWN|
|status|HIDDEN|

## getDevicePowerActions

<a id="opIdgetDevicePowerActions"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/action/power`</span>

Returns the power management actions available on the device at the current moment.See <a href='#schemadevicepoweraction'> DevicePowerAction </a> schema for further details.

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getdevicepoweractions-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|

> Example responses

> 200 Response

```json
{
  "cycle": true,
  "off": true,
  "on": true,
  "software_reboot": true
}
```

<h3 id="getdevicepoweractions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Returns a JSON object indicating the current availability of each power action on the device|[DevicePowerAction](#schemadevicepoweraction)|

## powerActionOnDevice

<a id="opIdpowerActionOnDevice"></a>

> Code samples

```shell
curl -X POST your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field}',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'X-Api-Key': 'API_KEY'
}

r = requests.post('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /agent/{agent_id}/device/{device_id}/action/power/{field}`</span>

Performs the action on the device, according to the specified {<b> field </b>} value. The availability of such operations can be determined with a call to <a href='#getdevicepoweractions'> getDevicePowerActions </a>  operation

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="poweractionondevice-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|field|path|string|true|Specifies the power action to perform|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|on|
|field|off|
|field|cycle|
|field|software-reboot|

<h3 id="poweractionondevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## setCredentials

<a id="opIdsetCredentials"></a>

> Code samples

```shell
curl -X PUT your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/credentials \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/credentials',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "password": "string",
  "username": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/credentials',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.put('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/credentials', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.put 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/credentials',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/credentials", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /agent/{agent_id}/device/{device_id}/credentials`</span>

Sets the device credentials to perform extended discovery. This operation will affect the <b> authentication_status </b> of the device

> Body parameter

```json
{
  "password": "string",
  "username": "string"
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/credentials \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="setcredentials-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|body|body|[DeviceCredentials](#schemadevicecredentials)|true|device credentials payload|

<h3 id="setcredentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## getSNMPAuthentication

<a id="opIdgetSNMPAuthentication"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/snmp-authentication`</span>

Retrieves the SNMP authentication info

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getsnmpauthentication-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|

> Example responses

> 200 Response

```json
{
  "authentication_key": "string",
  "authentication_protocol": "MD5",
  "encryption_key": "string",
  "encryption_protocol": "DES",
  "snmp_read_community": "string",
  "snmp_write_community": "string",
  "username": "string",
  "version": "V2"
}
```

<h3 id="getsnmpauthentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The SNMP authentication info for the device|[SNMPDomotzAuthentication](#schemasnmpdomotzauthentication)|

## setSNMPAuthentication

<a id="opIdsetSNMPAuthentication"></a>

> Code samples

```shell
curl -X PUT your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "authentication_key": "string",
  "authentication_protocol": "MD5",
  "encryption_key": "string",
  "encryption_protocol": "DES",
  "snmp_read_community": "string",
  "snmp_write_community": "string",
  "username": "string",
  "version": "V2"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.put('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.put 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /agent/{agent_id}/device/{device_id}/snmp-authentication`</span>

Sets the SNMP authentication info. <ul><li>_snmp_read_community_ and _snmp_write_community_ are  relevant only for _V1_ and _V2_. </li><li>_V3_NO_AUTH_ requires a valid _username_. </li><li>_V3_AUTH_NO_PRIV_ requires _username_, _authentication_protocol_ and _authentication_key_. </li><li>_V3_AUTH_PRIV_ requires _username_, _authentication_protocol_, _authentication_key_, _encryption_protocol_ and _encryption_key_.</li></ul>

> Body parameter

```json
{
  "authentication_key": "string",
  "authentication_protocol": "MD5",
  "encryption_key": "string",
  "encryption_protocol": "DES",
  "snmp_read_community": "string",
  "snmp_write_community": "string",
  "username": "string",
  "version": "V2"
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="setsnmpauthentication-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|body|body|[SNMPDomotzAuthentication](#schemasnmpdomotzauthentication)|true|none|

<h3 id="setsnmpauthentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## setSnmpCommunity

<a id="opIdsetSnmpCommunity"></a>

> Code samples

```shell
curl -X PUT your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "read": "string",
  "write": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.put('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.put 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /agent/{agent_id}/device/{device_id}/snmp-community`</span>

Saves a snmp community (read, optionally write) on device. _Deprecated_, please use <a href='#setsnmpauthentication'> setSNMPAuthentication </a>

> Body parameter

```json
{
  "read": "string",
  "write": "string"
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="setsnmpcommunity-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|body|body|[DeviceSnmpCommunity](#schemadevicesnmpcommunity)|true|The value that the snmp community entries will change to|

<h3 id="setsnmpcommunity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## hideDevice

<a id="opIdhideDevice"></a>

> Code samples

```shell
curl -X DELETE your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/visibility \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/visibility',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/visibility',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'X-Api-Key': 'API_KEY'
}

r = requests.delete('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/visibility', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/visibility',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/visibility", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/device/{device_id}/visibility`</span>

Hides a device (available only on DOWN devices)

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/visibility \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="hidedevice-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|

<h3 id="hidedevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## editDevice

<a id="opIdeditDevice"></a>

> Code samples

```shell
curl -X PUT your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/{field} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/{field}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'string';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/{field}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.put('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/{field}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.put 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/{field}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/{field}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /agent/{agent_id}/device/{device_id}/{field}`</span>

Changes a field of the device or one of its details

> Body parameter

```json
"string"
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/{field} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="editdevice-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|field|path|string|true|The field to update - for the type and valid values see the description of the corresponding output parameter|
|body|body|string|true|The value that the field will change to|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|importance|
|field|user_data/model|
|field|user_data/type|
|field|user_data/name|
|field|user_data/vendor|
|field|details/room|
|field|details/zone|

<h3 id="editdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

<h1 id="domotz-public-api-metrics">metrics</h1>

## getAgentRTDStats

<a id="opIdgetAgentRTDStats"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/rtd \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/rtd',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/rtd',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/rtd', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/rtd',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/rtd", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/rtd`</span>

Returns the Round Trip Delay statistics for all devices monitored by the agent. The aggregate values of _avg_min_, _avg_max_, _avg_median_ help to understand the baseline response time of a device in a weekly time frame, while _latest_median_ helps detecting a possible deviation from the baseline

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/rtd \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagentrtdstats-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
[
  {
    "avg_max": "string",
    "avg_median": "string",
    "avg_min": "string",
    "device_id": 0,
    "latest_lost_packet_count": 0,
    "latest_median": "string",
    "latest_sent_packet_count": 0,
    "timestamp": "2019-08-24T14:15:22Z"
  }
]
```

<h3 id="getagentrtdstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Devices RTD Statistics|Inline|

<h3 id="getagentrtdstats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[DeviceRTDStatistics](#schemadevicertdstatistics)]|false|none|
|» avg_max|string|false|none|
|» avg_median|string|false|none|
|» avg_min|string|false|none|
|» device_id|integer(int32)|true|none|
|» latest_lost_packet_count|integer(int32)|false|The number of lost packets of the latest collection sample|
|» latest_median|string|false|The median value of the latest collection sample|
|» latest_sent_packet_count|integer(int32)|false|The number of sent packets of the latest collection sample|
|» timestamp|string(date-time)|true|The timestamp of the latest update|

## getDeviceStatusHistory

<a id="opIdgetDeviceStatusHistory"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/history/network/event`</span>

Returns the time series of the state changes of the device

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getdevicestatushistory-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|from|query|string(date-time)|false|The start time of the time series. Default value is one week|
|to|query|string(date-time)|false|The end time of the time series. Default value is now|

> Example responses

> 200 Response

```json
[
  {
    "details": {
      "new_ip": [
        "string"
      ],
      "old_ip": [
        "string"
      ]
    },
    "timestamp": "2019-08-24T14:15:22Z",
    "type": "IP_CHANGE"
  }
]
```

<h3 id="getdevicestatushistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A time series|Inline|

<h3 id="getdevicestatushistory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[DeviceHistory](#schemadevicehistory)]|false|none|
|» details|object|false|none|
|»» new_ip|[string]|false|The new IP addresses|
|»» old_ip|[string]|false|The old IP addresses|
|» timestamp|string(date-time)|true|The time the sample was reported to Domotz|
|» type|string|true|The device event type|

#### Enumerated Values

|Property|Value|
|---|---|
|type|IP_CHANGE|
|type|CREATED|
|type|UP|
|type|DOWN|

## getDeviceRTDHistory

<a id="opIdgetDeviceRTDHistory"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/history/rtd`</span>

Returns the Round Trip Delay history for the device. Each item represents the statistical aggregate of a set of Round Trip Delay measurements

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getdevicertdhistory-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|from|query|string(date-time)|false|The start time of the time series. Default value is one week|
|to|query|string(date-time)|false|The end time of the time series. Default value is now|

> Example responses

> 200 Response

```json
[
  {
    "lost_packet_count": 0,
    "max": "string",
    "median": "string",
    "min": "string",
    "sent_packet_count": 0,
    "timestamp": "2019-08-24T14:15:22Z"
  }
]
```

<h3 id="getdevicertdhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Device RTD History|Inline|

<h3 id="getdevicertdhistory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[DeviceRTDHistorySample](#schemadevicertdhistorysample)]|false|none|
|» lost_packet_count|integer(int32)|false|none|
|» max|string|false|none|
|» median|string|false|none|
|» min|string|false|none|
|» sent_packet_count|integer(int32)|false|none|
|» timestamp|string(date-time)|true|The time the sample was reported to Domotz|

## getAgentStatusHistory

<a id="opIdgetAgentStatusHistory"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/event \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/event',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/event',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/event', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/event',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/event", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/history/network/event`</span>

Returns the time series of the state changes of the agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/event \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagentstatushistory-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|from|query|string(date-time)|false|The start time of the time series. Default value is one week|
|to|query|string(date-time)|false|The end time of the time series. Default value is now|

> Example responses

> 200 Response

```json
[
  {
    "timestamp": "2019-08-24T14:15:22Z",
    "type": "CONNECTION_RECOVERED"
  }
]
```

<h3 id="getagentstatushistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A time series|Inline|

<h3 id="getagentstatushistory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[AgentHistory](#schemaagenthistory)]|false|none|
|» timestamp|string(date-time)|true|The time the sample was reported to Domotz|
|» type|string|true|The agent event type|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CONNECTION_RECOVERED|
|type|CONNECTION_LOST|
|type|UP|
|type|DOWN|

## getSpeedTestHistory

<a id="opIdgetSpeedTestHistory"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/speed \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/speed',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/speed',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/speed', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/speed',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/speed", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/history/network/speed`</span>

Returns the time series of the Internet Speed measurements taken from the agent, both in 
download and in upload.

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/history/network/speed \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getspeedtesthistory-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|from|query|string(date-time)|false|The start time of the time series. Default value is one week|
|to|query|string(date-time)|false|The end time of the time series. Default value is now|

> Example responses

> 200 Response

```json
[
  {
    "timestamp": "2019-08-24T14:15:22Z",
    "values": [
      0
    ]
  }
]
```

<h3 id="getspeedtesthistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A time series|Inline|

<h3 id="getspeedtesthistory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[NetworkSpeedSample](#schemanetworkspeedsample)]|false|[A Network Speed Sample is the result of the measurement of the Internet download and upload      speed, in bits per second, taken by the Agent]|
|» timestamp|string(date-time)|false|The time the sample was reported to Domotz|
|» values|[integer]|false|A pair of values: the download and upload speed, in Bit Per Seconds (bps), as measured by the Agent|

<h1 id="domotz-public-api-actions">actions</h1>

## connectToDevice

<a id="opIdconnectToDevice"></a>

> Code samples

```shell
curl -X POST your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/connection \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/connection',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "allowed_ip": "string",
  "port": 0,
  "protocol": "http"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/connection',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.post('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/connection', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/connection',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/connection", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /agent/{agent_id}/device/{device_id}/connection`</span>

Establishes a direct secure connection to the `device` Current consumption and consumption limits can be retrieved with a call to <a href='#getconnectionconsumption'> getConnectionConsumption</a> endpoint

> Body parameter

```json
{
  "allowed_ip": "string",
  "port": 0,
  "protocol": "http"
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/connection \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="connecttodevice-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|body|body|[DeviceConnection](#schemadeviceconnection)|true|none|

> Example responses

> 201 Response

```json
{
  "allowed_ip": "string",
  "expiration": "2019-08-24T14:15:22Z",
  "id": 0,
  "link": "string",
  "port": 0,
  "protocol": "http"
}
```

<h3 id="connecttodevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[ConnectionSession](#schemaconnectionsession)|

<h1 id="domotz-public-api-eyes">eyes</h1>

## listEyesSNMP

<a id="opIdlistEyesSNMP"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/eye/snmp`</span>

Retrieves the list of configured SNMP Domotz Eyes

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listeyessnmp-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|

> Example responses

> 200 Response

```json
[
  {
    "category": "OTHER",
    "id": 0,
    "last_update": "2019-08-24T14:15:22Z",
    "latest_value": "string",
    "name": "string",
    "oid": "string",
    "value_type": "STRING"
  }
]
```

<h3 id="listeyessnmp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of configured SNMP Domotz Eyes for the device and their latest values|Inline|

<h3 id="listeyessnmp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[SNMPDomotzEye](#schemasnmpdomotzeye)]|false|[Information about a configured SNMP Domotz Eye]|
|» category|string|true|The category of the OID|
|» id|integer(int32)|true|The unique identifier of the SNMP Domotz Eye|
|» last_update|string(date-time)|true|The timestamp of the latest update|
|» latest_value|string|true|The value retrieved on the OID|
|» name|string|true|The name of the Domotz Eyes|
|» oid|string|true|The OID string|
|» value_type|string|true|The type of the OID|

#### Enumerated Values

|Property|Value|
|---|---|
|category|OTHER|
|category|CONSUMABLE|
|category|CPU|
|category|DISK_SPACE|
|category|MEMORY|
|category|NETWORK_TRAFFIC|
|category|TEMPERATURE|
|value_type|STRING|
|value_type|NUMERIC|

## createEyeSNMP

<a id="opIdcreateEyeSNMP"></a>

> Code samples

```shell
curl -X POST your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "category": "OTHER",
  "name": "string",
  "oid": "string",
  "value_type": "STRING"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.post('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /agent/{agent_id}/device/{device_id}/eye/snmp`</span>

Creates a new SNMP Domotz Eyes

> Body parameter

```json
{
  "category": "OTHER",
  "name": "string",
  "oid": "string",
  "value_type": "STRING"
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="createeyesnmp-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|body|body|[SNMPDomotzEyeCreation](#schemasnmpdomotzeyecreation)|true|none|

<h3 id="createeyesnmp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

## deleteEyeSNMP

<a id="opIddeleteEyeSNMP"></a>

> Code samples

```shell
curl -X DELETE your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'X-Api-Key': 'API_KEY'
}

r = requests.delete('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}`</span>

Deletes the SNMP Domotz Eye

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deleteeyesnmp-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|sensor_id|path|integer(int32)|true|SNMP Eye ID|

<h3 id="deleteeyesnmp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## listEyesTCP

<a id="opIdlistEyesTCP"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/eye/tcp`</span>

Retrieves the list of configured TCP Domotz Eyes

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listeyestcp-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "last_update": "2019-08-24T14:15:22Z",
    "port": 0,
    "status": "UP"
  }
]
```

<h3 id="listeyestcp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of configured TCP Domotz Eyes for the device and their latest values|Inline|

<h3 id="listeyestcp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[TCPDomotzEye](#schematcpdomotzeye)]|false|[Information about a configured TCP Domotz Eye]|
|» id|integer(int32)|true|The unique identifier of the TCP Domotz Eye|
|» last_update|string(date-time)|true|The timestamp of the latest update|
|» port|integer(int32)|true|The port number|
|» status|string|true|The status of the TCP service|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UP|
|status|DOWN|

## createEyeTCP

<a id="opIdcreateEyeTCP"></a>

> Code samples

```shell
curl -X POST your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "port": 0
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.post('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /agent/{agent_id}/device/{device_id}/eye/tcp`</span>

Creates a new TCP Domotz Eyes

> Body parameter

```json
{
  "port": 0
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="createeyetcp-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|body|body|[TCPDomotzEyeCreation](#schematcpdomotzeyecreation)|true|none|

<h3 id="createeyetcp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

## deleteEyeTCP

<a id="opIddeleteEyeTCP"></a>

> Code samples

```shell
curl -X DELETE your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'X-Api-Key': 'API_KEY'
}

r = requests.delete('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/device/{device_id}/eye/tcp/{service_id}`</span>

Deletes the TCP Domotz Eye

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deleteeyetcp-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|service_id|path|integer(int32)|true|TCP Eye ID|

<h3 id="deleteeyetcp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## eyesUsageInfo

<a id="opIdeyesUsageInfo"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/eye-statistics \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/eye-statistics',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/eye-statistics',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/eye-statistics', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/eye-statistics',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/eye-statistics", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/eye-statistics`</span>

Retrieves information about Domotz Eyes usage and limits

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/eye-statistics \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="eyesusageinfo-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
{
  "limit": 0,
  "usage": {
    "snmp": 0,
    "tcp": 0,
    "total": 0
  }
}
```

<h3 id="eyesusageinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A data structure containing information about current Domotz Eyes usage and limits|[DomotzEyesUsageInformation](#schemadomotzeyesusageinformation)|

<h1 id="domotz-public-api-multimedia">multimedia</h1>

## onvifSnapshot

<a id="opIdonvifSnapshot"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot \
  -H 'Accept: image/*' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'image/*',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'image/*',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'image/*',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'image/*',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"image/*"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot`</span>

Take a snapshot of the camera. Internally, a device connection is established.Current consumption and consumption limits can be retrieved with a call to <a href='#getconnectionconsumption'> getConnectionConsumption</a> endpoint

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot \
  -H 'Accept: image/*' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="onvifsnapshot-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|

> Example responses

> 200 Response

<h3 id="onvifsnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A binary image|string|

<h1 id="domotz-public-api-company">company</h1>

## moveAgent

<a id="opIdmoveAgent"></a>

> Code samples

```shell
curl -X PUT your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/ownership/team/{team_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/ownership/team/{team_id}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/ownership/team/{team_id}',
{
  method: 'PUT',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'X-Api-Key': 'API_KEY'
}

r = requests.put('your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/ownership/team/{team_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.put 'your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/ownership/team/{team_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/ownership/team/{team_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /agent/{agent_id}/ownership/team/{team_id}`</span>

Moves an agent under the control of a different team

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/agent/{agent_id}/ownership/team/{team_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="moveagent-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|team_id|path|integer(int32)|true|Team ID|

<h3 id="moveagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## listAreas

<a id="opIdlistAreas"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/area \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/area',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/area',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/area', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/area',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/area", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /area`</span>

Returns all the areas of a Company

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```

<h3 id="listareas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of all the areas in the User's Company|Inline|

<h3 id="listareas-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[Area](#schemaarea)]|false|[Represents an area of the Company]|
|» id|integer(int32)|true|The identifier of the Area|
|» name|string|true|The name of the Area|

## listTeams

<a id="opIdlistTeams"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/area/{area_id}/team \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/area/{area_id}/team',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/area/{area_id}/team',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/area/{area_id}/team', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/area/{area_id}/team',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/area/{area_id}/team", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /area/{area_id}/team`</span>

Returns all the teams of an Area

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/area/{area_id}/team \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listteams-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|area_id|path|integer(int32)|true|Area ID|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string"
  }
]
```

<h3 id="listteams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of all the teams in a Company Area's|Inline|

<h3 id="listteams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[Team](#schemateam)]|false|[Represents a team of the Company]|
|» id|integer(int32)|true|The identifier of the Team|
|» name|string|true|The name of the Team|

## createTeam

<a id="opIdcreateTeam"></a>

> Code samples

```shell
curl -X POST your-domotz-api-endpoint/public-api/v1/area/{area_id}/team \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/area/{area_id}/team',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{
  "leader": {
    "details": {
      "display_name": "string"
    },
    "name": "string",
    "password": "string"
  },
  "name": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/area/{area_id}/team',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.post('your-domotz-api-endpoint/public-api/v1/area/{area_id}/team', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post 'your-domotz-api-endpoint/public-api/v1/area/{area_id}/team',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "your-domotz-api-endpoint/public-api/v1/area/{area_id}/team", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /area/{area_id}/team`</span>

Creates a new Team

> Body parameter

```json
{
  "leader": {
    "details": {
      "display_name": "string"
    },
    "name": "string",
    "password": "string"
  },
  "name": "string"
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/area/{area_id}/team \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="createteam-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|area_id|path|integer(int32)|true|Area ID|
|body|body|[TeamCreation](#schemateamcreation)|true|none|

<h3 id="createteam-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<h1 id="domotz-public-api-alert-profiles">alert profiles</h1>

## getAgentAlertProfile

<a id="opIdgetAgentAlertProfile"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id} \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /alert-profile/binding/agent/{agent_id}`</span>

Get the alert profile bindings of an agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id} \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagentalertprofile-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
[
  {
    "alert_profile_id": 0
  }
]
```

<h3 id="getagentalertprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The alert profile bindings of an agent|Inline|

<h3 id="getagentalertprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertProfileAgentBinding](#schemaalertprofileagentbinding)]|false|none|
|» alert_profile_id|integer(int32)|true|The id of the alert profile|

## getDevicesAlertProfile

<a id="opIdgetDevicesAlertProfile"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id}/device \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id}/device',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id}/device',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id}/device', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id}/device',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id}/device", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /alert-profile/binding/agent/{agent_id}/device`</span>

Get the alert profile bindings of the devices of an agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/alert-profile/binding/agent/{agent_id}/device \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getdevicesalertprofile-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
[
  {
    "alert_profile_id": 0,
    "device_id": 0
  }
]
```

<h3 id="getdevicesalertprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The alert profile bindings for all devices of the agent|Inline|

<h3 id="getdevicesalertprofile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertProfileDeviceBinding](#schemaalertprofiledevicebinding)]|false|none|
|» alert_profile_id|integer(int32)|true|The id of the alert profile|
|» device_id|integer(int32)|true|none|

## unbindAlertProfileFromAgent

<a id="opIdunbindAlertProfileFromAgent"></a>

> Code samples

```shell
curl -X DELETE your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'X-Api-Key': 'API_KEY'
}

r = requests.delete('your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete 'your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /alert-profile/{alert_profile_id}/binding/agent/{agent_id}`</span>

Unbind an alert profile from an agent.

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="unbindalertprofilefromagent-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|alert_profile_id|path|integer(int32)|true|Profile ID|

<h3 id="unbindalertprofilefromagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## bindAlertProfileToAgent

<a id="opIdbindAlertProfileToAgent"></a>

> Code samples

```shell
curl -X POST your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'X-Api-Key': 'API_KEY'
}

r = requests.post('your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post 'your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /alert-profile/{alert_profile_id}/binding/agent/{agent_id}`</span>

Bind an alert profile to an agent. After binding, a webhook will be sent to the configured service when one of the events associated to the profile occurs. You can configure the profile and the webhook endpoint on the Domotz Portal

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="bindalertprofiletoagent-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|alert_profile_id|path|integer(int32)|true|Profile ID|

<h3 id="bindalertprofiletoagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

<div class="content well">

<h3> Webhook Events </h3>

<table>
  <thead>
    <tr>
      <th>Event Name</th>
      <th>Method</th>
      <th>Schema</th>
      <th>Expected Reply</th>
    </tr>
  </thead>
<tbody>

<tr>
<td>agent_device_discovery</td>
<td>POST</td>
<td><a href="#tocSdevicediscoveryevent" data-title="DeviceDiscoveryEvent">DeviceDiscoveryEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>agent_security_issue</td>
<td>POST</td>
<td><a href="#tocSagentsecurityissueevent" data-title="AgentSecurityIssueEvent">AgentSecurityIssueEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>agent_speed_test</td>
<td>POST</td>
<td><a href="#tocSagentspeedtestevent" data-title="AgentSpeedTestEvent">AgentSpeedTestEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>agent_status</td>
<td>POST</td>
<td><a href="#tocSagentstatusevent" data-title="AgentStatusEvent">AgentStatusEvent</a></td>
<td>201</td>
</tr>

</tbody>
</table>

</div>

## unbindAlertProfileFromDevice

<a id="opIdunbindAlertProfileFromDevice"></a>

> Code samples

```shell
curl -X DELETE your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}',
  method: 'delete',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'X-Api-Key': 'API_KEY'
}

r = requests.delete('your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete 'your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}`</span>

Unbind an alert profile from a device

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="unbindalertprofilefromdevice-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|alert_profile_id|path|integer(int32)|true|Profile ID|
|device_id|path|integer(int32)|true|Device ID|

<h3 id="unbindalertprofilefromdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## bindAlertProfileToDevice

<a id="opIdbindAlertProfileToDevice"></a>

> Code samples

```shell
curl -X POST your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'X-Api-Key': 'API_KEY'
}

r = requests.post('your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post 'your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}`</span>

Bind an alert profile to a device. After binding, a webhook will be sent to the configured service when one of the events associated to the profile occurs. You can configure the profile and the webhook endpoint on the Domotz Portal

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="bindalertprofiletodevice-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|alert_profile_id|path|integer(int32)|true|Profile ID|
|device_id|path|integer(int32)|true|Device ID|

<h3 id="bindalertprofiletodevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

<div class="content well">

<h3> Webhook Events </h3>

<table>
  <thead>
    <tr>
      <th>Event Name</th>
      <th>Method</th>
      <th>Schema</th>
      <th>Expected Reply</th>
    </tr>
  </thead>
<tbody>

<tr>
<td>device_configuration_change</td>
<td>POST</td>
<td><a href="#tocSdeviceconfigurationchangeevent" data-title="DeviceConfigurationChangeEvent">DeviceConfigurationChangeEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>device_configuration_misalignment</td>
<td>POST</td>
<td><a href="#tocSdeviceconfigurationmisalignmentevent" data-title="DeviceConfigurationMisalignmentEvent">DeviceConfigurationMisalignmentEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>device_heartbeat_lost</td>
<td>POST</td>
<td><a href="#tocSdeviceheartbeatlostevent" data-title="DeviceHeartbeatLostEvent">DeviceHeartbeatLostEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>device_ip_change</td>
<td>POST</td>
<td><a href="#tocSdeviceipchangeevent" data-title="DeviceIPChangeEvent">DeviceIPChangeEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>device_rtd</td>
<td>POST</td>
<td><a href="#tocSdevicertdissueevent" data-title="DeviceRTDIssueEvent">DeviceRTDIssueEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>device_snmp</td>
<td>POST</td>
<td><a href="#tocSdevicesnmpevent" data-title="DeviceSNMPEvent">DeviceSNMPEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>device_status</td>
<td>POST</td>
<td><a href="#tocSdevicestatuschangeevent" data-title="DeviceStatusChangeEvent">DeviceStatusChangeEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>device_tcp</td>
<td>POST</td>
<td><a href="#tocSdevicetcpevent" data-title="DeviceTCPEvent">DeviceTCPEvent</a></td>
<td>201</td>
</tr>

</tbody>
</table>

</div>

## getAlertProfiles

<a id="opIdgetAlertProfiles"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/user/{user_id}/alert-profile \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/user/{user_id}/alert-profile',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/user/{user_id}/alert-profile',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/user/{user_id}/alert-profile', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/user/{user_id}/alert-profile',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/user/{user_id}/alert-profile", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /user/{user_id}/alert-profile`</span>

Returns the list of configured alert profiles. You can configure alert profiles on the Domotz Portal. Alert profiles define the association between a list of events and a notification channel (email, webhook or slack)

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">your-domotz-api-endpoint/public-api/v1/user/{user_id}/alert-profile \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getalertprofiles-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|integer(int32)|true|User ID|

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "events": [
      "device_status"
    ],
    "id": 0,
    "is_enabled": true,
    "name": "string",
    "tag": "string"
  }
]
```

<h3 id="getalertprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of configured alert profiles|Inline|

<h3 id="getalertprofiles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertProfile](#schemaalertprofile)]|false|none|
|» description|string|false|The description of the alert profile|
|» events|[string]|false|The list of events associated to the profile|
|» id|integer(int32)|true|The id of the event profile|
|» is_enabled|boolean|false|true if the event profile is enabled, false otherwise|
|» name|string|false|The symbolic name associated to the profile|
|» tag|string|false|A label associated to the profile|

<h1 id="domotz-public-api-meta">meta</h1>

## apiUsageInfo

<a id="opIdapiUsageInfo"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/meta/usage \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/meta/usage',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/meta/usage',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/meta/usage', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/meta/usage',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/meta/usage", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /meta/usage`</span>

Retrieves information about API usage and limits

> Example responses

> 200 Response

```json
{
  "by_ip": [
    {
      "count": 0,
      "name": "string"
    }
  ],
  "by_key": [
    {
      "count": 0,
      "id": 0,
      "name": "string"
    }
  ],
  "by_resource": [
    {
      "count": 0,
      "name": "string"
    }
  ],
  "concurrent_allowed": 0,
  "daily_limit": 0,
  "daily_usage": 0
}
```

<h3 id="apiusageinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A data structure containing information about current API usage and usage limits|[APIUsageInformation](#schemaapiusageinformation)|

<h1 id="domotz-public-api-assets">assets</h1>

## listDeviceBaseTypes

<a id="opIdlistDeviceBaseTypes"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/type/device/base \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/type/device/base',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/type/device/base',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/type/device/base', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/type/device/base',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/type/device/base", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /type/device/base`</span>

Returns the device types list

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "identifier": "string",
    "label": "string",
    "vital": true
  }
]
```

<h3 id="listdevicebasetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The types list|Inline|

<h3 id="listdevicebasetypes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[DeviceBaseType](#schemadevicebasetype)]|false|[A device type, either set by the user or as identified by the Domotz system]|
|» id|integer(int32)|false|An unique identifier of the type, referred in the `Device` entity|
|» identifier|string|false|The name of the type|
|» label|string|false|A human-readable short description of the type|
|» vital|boolean|false|Whether a device of this type will be marked as `VITAL` as soon as recognised|

## listDeviceDetectedTypes

<a id="opIdlistDeviceDetectedTypes"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/type/device/detected \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/type/device/detected',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/type/device/detected',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/type/device/detected', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/type/device/detected',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/type/device/detected", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /type/device/detected`</span>

Returns the detected device types list

> Example responses

> 200 Response

```json
[
  {
    "capabilities": [
      "string"
    ],
    "id": 0,
    "identifier": "string",
    "label": "string",
    "type_id": 0
  }
]
```

<h3 id="listdevicedetectedtypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The types list|Inline|

<h3 id="listdevicedetectedtypes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[DetectedDeviceType](#schemadetecteddevicetype)]|false|[A device type, detected by the Domotz device identification feature]|
|» capabilities|[string]|false|The features of the device|
|» id|integer(int32)|false|An unique identifier of the type, referred in the `Device` entity|
|» identifier|string|false|The name of the type|
|» label|string|false|A human-readable short description of the type|
|» type_id|integer(int32)|false|The corresponding `device type`|

<h1 id="domotz-public-api-user">user</h1>

## getUser

<a id="opIdgetUser"></a>

> Code samples

```shell
curl -X GET your-domotz-api-endpoint/public-api/v1/user \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: 'your-domotz-api-endpoint/public-api/v1/user',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('your-domotz-api-endpoint/public-api/v1/user',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Api-Key': 'API_KEY'
}

r = requests.get('your-domotz-api-endpoint/public-api/v1/user', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.get 'your-domotz-api-endpoint/public-api/v1/user',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "your-domotz-api-endpoint/public-api/v1/user", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /user`</span>

Returns the User information

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string"
}
```

<h3 id="getuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The user|[User](#schemauser)|

# Schemas

<h2 id="tocSapiusageinformation">APIUsageInformation</h2>

<a id="schemaapiusageinformation"></a>

```json
{
  "by_ip": [
    {
      "count": 0,
      "name": "string"
    }
  ],
  "by_key": [
    {
      "count": 0,
      "id": 0,
      "name": "string"
    }
  ],
  "by_resource": [
    {
      "count": 0,
      "name": "string"
    }
  ],
  "concurrent_allowed": 0,
  "daily_limit": 0,
  "daily_usage": 0
}

```

*Information about Domotz API current usage and usage limits*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|by_ip|[object]|false|none|
|» count|integer(int32)|false|The number of calls originated from that IP address|
|» name|string|false|The IP address|
|by_key|[object]|false|none|
|» count|integer(int32)|false|The number of calls done using this key in the last 24 hours|
|» id|integer(int32)|false|The ID of the API key|
|» name|string|false|The mnemonic API key name|
|by_resource|[object]|false|none|
|» count|integer(int32)|false|The number of calls for the resource|
|» name|string|false|The base resource name|
|concurrent_allowed|integer(int32)|false|Number of allowed calls to the API in a minute.|
|daily_limit|integer(int32)|false|Number of allowed calls to the API in a 24 hours span.|
|daily_usage|integer(int32)|false|Number of API call performed in the last 24 hours.|

<h2 id="tocSabstractdevice">AbstractDevice</h2>

<a id="schemaabstractdevice"></a>

```json
{
  "authentication_status": "AUTHENTICATED",
  "details": {
    "room": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "protocol": "IP",
  "type": {
    "detected_id": 0,
    "id": 0
  },
  "user_data": {
    "model": "string",
    "name": "string",
    "type": 0,
    "vendor": "string"
  }
}

```

*Base abstract class for all devices*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|authentication_status|string|false|When defined the device requires authentication info to perform extended discovery <ul> <li> *REQUIRED*: the device requires authentication, extended discovery is locked </li><li> *PENDING*: credentials have been submitted but not verified yet </li><li> *WRONG_CREDENTIALS*: device authentication failed </li><li> *AUTHENTICATED*: device authentication succeeded </li></ul>|
|details|object|false|DeviceDetails|
|» room|string|false|none|
|» snmp_read_community|string|false|Deprecated. Please use <a href='#getsnmpauthentication'> getSNMPAuthentication </a>|
|» snmp_write_community|string|false|Deprecated. Please use <a href='#getsnmpauthentication'> getSNMPAuthentication </a>|
|» zone|string|false|none|
|display_name|string|true|none|
|first_seen_on|string(date-time)|false|none|
|id|integer(int32)|true|none|
|importance|string|false|none|
|main_id|integer(int32)|false|In a clustered configuration, the main device id|
|protocol|string|true|none|
|type|object|false|The device type, if recognised by domotz|
|» detected_id|integer(int32)|false|none|
|» id|integer(int32)|false|none|
|user_data|object|false|none|
|» model|string|false|none|
|» name|string|false|none|
|» type|integer(int32)|false|none|
|» vendor|string|false|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authentication_status|AUTHENTICATED|
|authentication_status|NO_AUTHENTICATION|
|authentication_status|PENDING|
|authentication_status|REQUIRED|
|authentication_status|WRONG_CREDENTIALS|
|importance|VITAL|
|importance|FLOATING|
|protocol|IP|
|protocol|DUMMY|
|protocol|IP_EXTERNAL|

<h2 id="tocSagentbase">AgentBase</h2>

<a id="schemaagentbase"></a>

```json
{
  "access_right": {
    "api_enabled": true,
    "granting_user": {
      "name": "user@example.com"
    },
    "status": "OWNED"
  },
  "creation_time": "2019-08-24T14:15:22Z",
  "display_name": "string",
  "id": 0,
  "licence": {
    "activation_time": "2019-08-24T14:15:22Z",
    "bound_mac_address": "string",
    "code": "string",
    "expiration_time": "2019-08-24T14:15:22Z",
    "id": 0
  },
  "status": {
    "last_change": "2019-08-24T14:15:22Z",
    "value": "ONLINE"
  },
  "team": {
    "area": {
      "id": 0
    },
    "id": 0,
    "leader_id": 0,
    "name": "string"
  },
  "timezone": "string",
  "version": {
    "agent": "string",
    "package": "string"
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|access_right|object|false|none|
|» api_enabled|boolean|false|If `false` the agent plan doesn't allow for API access: you only can see this agent in the list|
|» granting_user|object|false|none|
|»» name|string(email)|false|none|
|» status|string|false|<ul><li> *OWNED*: you own this agent </li><li> *PROPOSED*: the owner proposed you to access the agent, you can accept or reject the offer </li><li> *GRANTED*: you accepted the collaboration request for this agent </li><li> *ASSIGNED*: your team leader has given you access to the agent </li></ul>|
|creation_time|string(date-time)|false|none|
|display_name|string|true|none|
|id|integer(int32)|true|none|
|licence|object|false|none|
|» activation_time|string(date-time)|false|none|
|» bound_mac_address|string|false|The MAC address of the primary interface of the device the software agent runs on|
|» code|string|false|none|
|» expiration_time|string(date-time)|false|none|
|» id|integer(int32)|false|none|
|status|object|false|none|
|» last_change|string(date-time)|false|none|
|» value|string|false|none|
|team|object|false|The Team and Company Area information, only available for companies|
|» area|object|false|none|
|»» id|integer(int32)|false|none|
|» id|integer(int32)|false|none|
|» leader_id|integer(int32)|false|none|
|» name|string|false|none|
|timezone|string|false|none|
|version|object|false|none|
|» agent|string|false|none|
|» package|string|false|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OWNED|
|status|GRANTED|
|status|PROPOSED|
|status|ASSIGNED|
|value|ONLINE|
|value|OFFLINE|

<h2 id="tocSagentdetail">AgentDetail</h2>

<a id="schemaagentdetail"></a>

```json
{
  "access_right": {
    "api_enabled": true,
    "granting_user": {
      "name": "user@example.com"
    },
    "status": "OWNED"
  },
  "creation_time": "2019-08-24T14:15:22Z",
  "display_name": "string",
  "id": 0,
  "licence": {
    "activation_time": "2019-08-24T14:15:22Z",
    "bound_mac_address": "string",
    "code": "string",
    "expiration_time": "2019-08-24T14:15:22Z",
    "id": 0
  },
  "status": {
    "last_change": "2019-08-24T14:15:22Z",
    "value": "ONLINE"
  },
  "team": {
    "area": {
      "id": 0
    },
    "id": 0,
    "leader_id": 0,
    "name": "string"
  },
  "timezone": "string",
  "version": {
    "agent": "string",
    "package": "string"
  },
  "listen_on": "string",
  "location": {
    "latitude": "string",
    "longitude": "string"
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[AgentBase](#schemaagentbase)|false|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|
|» listen_on|string|false|The local IP and port the Domotz Agent software is listening on if online - the last known value otherwise|
|» location|object|false|none|
|»» latitude|string|false|none|
|»» longitude|string|false|none|

<h2 id="tocSagenthistory">AgentHistory</h2>

<a id="schemaagenthistory"></a>

```json
{
  "timestamp": "2019-08-24T14:15:22Z",
  "type": "CONNECTION_RECOVERED"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|true|The time the sample was reported to Domotz|
|type|string|true|The agent event type|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CONNECTION_RECOVERED|
|type|CONNECTION_LOST|
|type|UP|
|type|DOWN|

<h2 id="tocSagentsecurityissueevent">AgentSecurityIssueEvent</h2>

<a id="schemaagentsecurityissueevent"></a>

```json
{
  "data": {
    "agent_id": 0,
    "value": [
      {
        "port": 0,
        "type": "TCP_OPEN_PORT"
      }
    ]
  },
  "name": "agent_security_issue",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when Domotz detects a security issue*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» value|[object]|false|none|
|»» port|integer(int32)|false|none|
|»» type|string|false|none|
|» name|string|true|none|
|» timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TCP_OPEN_PORT|
|type|UPNP_IGD_FORWARD|
|type|UPNP_IGD_SERVICE|
|name|agent_security_issue|

<h2 id="tocSagentspeedtestevent">AgentSpeedTestEvent</h2>

<a id="schemaagentspeedtestevent"></a>

```json
{
  "data": {
    "agent_id": 0,
    "status": "SPEED_TEST_ISSUE_DETECTED",
    "threshold": {
      "download": 0,
      "upload": 0
    },
    "value": {
      "download": 0,
      "upload": 0
    }
  },
  "name": "agent_speed_test",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when the measured Internet speed goes below the defined threshold*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» status|string|false|none|
|» threshold|object|false|none|
|»» download|integer(int32)|false|The configured download threshold|
|»» upload|integer(int32)|false|The configured upload threshold|
|» value|object|false|none|
|»» download|integer(int32)|false|The measured download value|
|»» upload|integer(int32)|false|The measured upload value|
|» name|string|true|none|
|» timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|status|SPEED_TEST_ISSUE_DETECTED|
|status|SPEED_TEST_ISSUE_RESOLVED|
|name|agent_speed_test|

<h2 id="tocSagentstatusevent">AgentStatusEvent</h2>

<a id="schemaagentstatusevent"></a>

```json
{
  "data": {
    "agent_id": 0,
    "value": "UP"
  },
  "name": "agent_status",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when the agent connectivity status changes*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» value|string|false|none|
|name|string|true|none|
|timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|value|UP|
|value|DOWN|
|name|agent_status|

<h2 id="tocSalertprofile">AlertProfile</h2>

<a id="schemaalertprofile"></a>

```json
{
  "description": "string",
  "events": [
    "device_status"
  ],
  "id": 0,
  "is_enabled": true,
  "name": "string",
  "tag": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|description|string|false|The description of the alert profile|
|events|[string]|false|The list of events associated to the profile|
|id|integer(int32)|true|The id of the event profile|
|is_enabled|boolean|false|true if the event profile is enabled, false otherwise|
|name|string|false|The symbolic name associated to the profile|
|tag|string|false|A label associated to the profile|

<h2 id="tocSalertprofileagentbinding">AlertProfileAgentBinding</h2>

<a id="schemaalertprofileagentbinding"></a>

```json
{
  "alert_profile_id": 0
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|alert_profile_id|integer(int32)|true|The id of the alert profile|

<h2 id="tocSalertprofiledevicebinding">AlertProfileDeviceBinding</h2>

<a id="schemaalertprofiledevicebinding"></a>

```json
{
  "alert_profile_id": 0,
  "device_id": 0
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|alert_profile_id|integer(int32)|true|The id of the alert profile|
|device_id|integer(int32)|true|none|

<h2 id="tocSarea">Area</h2>

<a id="schemaarea"></a>

```json
{
  "id": 0,
  "name": "string"
}

```

*Represents an area of the Company*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|id|integer(int32)|true|The identifier of the Area|
|name|string|true|The name of the Area|

<h2 id="tocSconnectionconsumption">ConnectionConsumption</h2>

<a id="schemaconnectionconsumption"></a>

```json
{
  "current": 0,
  "limit": 0
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|current|integer(int32)|true|Current connection consumption (bytes)|
|limit|integer(int32)|true|Maximum connection consumption (bytes)|

<h2 id="tocSconnectionsession">ConnectionSession</h2>

<a id="schemaconnectionsession"></a>

```json
{
  "allowed_ip": "string",
  "expiration": "2019-08-24T14:15:22Z",
  "id": 0,
  "link": "string",
  "port": 0,
  "protocol": "http"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|allowed_ip|string|true|The only public IP address allowed to access the connection.         It will be impossible to use the connection from other IP addresses. You should use your public IP address.   For `http` and `https` it is safe, since if you keep the connection link secret nobody will access the device. For `tcp` it is not recommended because a random port scan on our servers may allow an hostile actor to use the connection, accessing the device's tcp port as if it was in the agent's network.|
|expiration|string(date-time)|false|The time after which the connection will be closed|
|id|integer(int32)|true|The unique identifier of the `connection`|
|link|string|false|Either the link to access the device's HTTP(s) interface in the browser or the host/port coordinates of the proxied TCP port, depending on the protocol (see protocol description in the request)|
|port|integer(int32)|true|none|
|protocol|string|true|The protocol wrapped by the connection:  </br>- *http/https*: the `link` field in the reply will contain an `https` URL. A browser or a similar user agent must be used: the client must have cookies enabled and the capability of following 302 redirects. If the protocol is `https` the device's certificate will be accepted without checks and its information ignored (our server will act as a proxy). </br>- *tcp*: the `link` field will be in the form `tcp://{host}:{port}`. Any connection established (e.g. with `telnet`  or `ssh`) on these coordinates will be securely forwarded to the requested `port` of the device.|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|http|
|protocol|https|
|protocol|tcp|

<h2 id="tocSdetecteddevicetype">DetectedDeviceType</h2>

<a id="schemadetecteddevicetype"></a>

```json
{
  "capabilities": [
    "string"
  ],
  "id": 0,
  "identifier": "string",
  "label": "string",
  "type_id": 0
}

```

*A device type, detected by the Domotz device identification feature*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|capabilities|[string]|false|The features of the device|
|id|integer(int32)|false|An unique identifier of the type, referred in the `Device` entity|
|identifier|string|false|The name of the type|
|label|string|false|A human-readable short description of the type|
|type_id|integer(int32)|false|The corresponding `device type`|

<h2 id="tocSdevicebasetype">DeviceBaseType</h2>

<a id="schemadevicebasetype"></a>

```json
{
  "id": 0,
  "identifier": "string",
  "label": "string",
  "vital": true
}

```

*A device type, either set by the user or as identified by the Domotz system*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|id|integer(int32)|false|An unique identifier of the type, referred in the `Device` entity|
|identifier|string|false|The name of the type|
|label|string|false|A human-readable short description of the type|
|vital|boolean|false|Whether a device of this type will be marked as `VITAL` as soon as recognised|

<h2 id="tocSdeviceconfigurationchangeevent">DeviceConfigurationChangeEvent</h2>

<a id="schemadeviceconfigurationchangeevent"></a>

```json
{
  "data": {
    "agent_id": 0,
    "device_id": 0
  },
  "name": "device_configuration_change",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when the device configuration changes*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device_id|integer(int32)|true|The `id` of the `device`|
|name|string|true|none|
|timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|name|device_configuration_change|

<h2 id="tocSdeviceconfigurationmisalignmentevent">DeviceConfigurationMisalignmentEvent</h2>

<a id="schemadeviceconfigurationmisalignmentevent"></a>

```json
{
  "data": {
    "agent_id": 0,
    "device_id": 0
  },
  "name": "device_configuration_misalignment",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when the device configuration becomes different from the startup one*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device_id|integer(int32)|true|The `id` of the `device`|
|name|string|true|none|
|timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|name|device_configuration_misalignment|

<h2 id="tocSdeviceconnection">DeviceConnection</h2>

<a id="schemadeviceconnection"></a>

```json
{
  "allowed_ip": "string",
  "port": 0,
  "protocol": "http"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|allowed_ip|string|true|The only public IP address allowed to access the connection.         It will be impossible to use the connection from other IP addresses. You should use your public IP address.   For `http` and `https` it is safe, since if you keep the connection link secret nobody will access the device. For `tcp` it is not recommended because a random port scan on our servers may allow an hostile actor to use the connection, accessing the device's tcp port as if it was in the agent's network.|
|port|integer(int32)|true|none|
|protocol|string|true|The protocol wrapped by the connection:  </br>- *http/https*: the `link` field in the reply will contain an `https` URL. A browser or a similar user agent must be used: the client must have cookies enabled and the capability of following 302 redirects. If the protocol is `https` the device's certificate will be accepted without checks and its information ignored (our server will act as a proxy). </br>- *tcp*: the `link` field will be in the form `tcp://{host}:{port}`. Any connection established (e.g. with `telnet`  or `ssh`) on these coordinates will be securely forwarded to the requested `port` of the device.|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|http|
|protocol|https|
|protocol|tcp|

<h2 id="tocSdevicecredentials">DeviceCredentials</h2>

<a id="schemadevicecredentials"></a>

```json
{
  "password": "string",
  "username": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|password|string|true|password|
|username|string|true|username|

<h2 id="tocSdevicediscoveryevent">DeviceDiscoveryEvent</h2>

<a id="schemadevicediscoveryevent"></a>

```json
{
  "data": {
    "agent_id": 0,
    "device_id": 0
  },
  "name": "agent_device_discovery",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when a new device appears on the network*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device_id|integer(int32)|false|The `id` of the `device`|
|name|string|true|none|
|timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|name|agent_device_discovery|

<h2 id="tocSdeviceheartbeatlostevent">DeviceHeartbeatLostEvent</h2>

<a id="schemadeviceheartbeatlostevent"></a>

```json
{
  "data": {
    "agent_id": 0,
    "device_id": 0
  },
  "name": "device_heartbeat_lost",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when a device does not respond to a ping*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device_id|integer(int32)|true|The `id` of the `device`|
|name|string|true|none|
|timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|name|device_heartbeat_lost|

<h2 id="tocSdevicehistory">DeviceHistory</h2>

<a id="schemadevicehistory"></a>

```json
{
  "details": {
    "new_ip": [
      "string"
    ],
    "old_ip": [
      "string"
    ]
  },
  "timestamp": "2019-08-24T14:15:22Z",
  "type": "IP_CHANGE"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|details|object|false|none|
|» new_ip|[string]|false|The new IP addresses|
|» old_ip|[string]|false|The old IP addresses|
|timestamp|string(date-time)|true|The time the sample was reported to Domotz|
|type|string|true|The device event type|

#### Enumerated Values

|Property|Value|
|---|---|
|type|IP_CHANGE|
|type|CREATED|
|type|UP|
|type|DOWN|

<h2 id="tocSdeviceipchangeevent">DeviceIPChangeEvent</h2>

<a id="schemadeviceipchangeevent"></a>

```json
{
  "data": {
    "agent_id": 0,
    "device_id": 0,
    "old_ip_addresses": [
      "string"
    ],
    "value": [
      "string"
    ]
  },
  "name": "device_ip_change",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when the device IP address changes*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device_id|integer(int32)|true|The `id` of the `device`|
|» old_ip_addresses|[string]|false|The list of previous IP addresses|
|» value|[string]|false|The list of new IP addresses|
|name|string|true|none|
|timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|name|device_ip_change|

<h2 id="tocSdevicepoweraction">DevicePowerAction</h2>

<a id="schemadevicepoweraction"></a>

```json
{
  "cycle": true,
  "off": true,
  "on": true,
  "software_reboot": true
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|cycle|boolean|false|Indicates that a power cycle on the device is possible. Available if the device is connected to just one PDU.|
|off|boolean|false|Indicates that the device can be powered off. Available if the device is connected to one or more PDU. <br><br> In the latter case the operation will be performed on all available PDUs.<br><br> If there no PDU but there is one POE connection, the operation will still be available through that connection.<br><br>|
|on|boolean|false|Indicates that the device can be powered on. Available if the device is connected to one or more PDU. <br><br> In the latter case the operation will be performed on all available PDUs.<br><br> If there is no PDU but there is one POE connection, the operation will still available through that connection.|
|software_reboot|boolean|false|Indicates that software reboot on the device is possible.<br><br> The operation availability depends on the device.|

<h2 id="tocSdevicertdhistorysample">DeviceRTDHistorySample</h2>

<a id="schemadevicertdhistorysample"></a>

```json
{
  "lost_packet_count": 0,
  "max": "string",
  "median": "string",
  "min": "string",
  "sent_packet_count": 0,
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|lost_packet_count|integer(int32)|false|none|
|max|string|false|none|
|median|string|false|none|
|min|string|false|none|
|sent_packet_count|integer(int32)|false|none|
|timestamp|string(date-time)|true|The time the sample was reported to Domotz|

<h2 id="tocSdevicertdissueevent">DeviceRTDIssueEvent</h2>

<a id="schemadevicertdissueevent"></a>

```json
{
  "data": {
    "agent_id": 0,
    "device_id": 0,
    "status": "RTD_ISSUE_DETECTED",
    "threshold": {
      "latency": 0,
      "packet_loss_percentage": 0
    },
    "value": {
      "latency": 0,
      "packet_loss_percentage": 0
    }
  },
  "name": "device_rtd",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when the Round-Trip-Delay values of a device exceeds the defined thresholds*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device_id|integer(int32)|true|The `id` of the `device`|
|» status|string|false|none|
|» threshold|object|false|none|
|»» latency|integer(int32)|false|The configured latency threshold|
|»» packet_loss_percentage|integer(int32)|false|The configured packet loss percentage threshold|
|» value|object|false|none|
|»» latency|integer(int32)|false|The current latency value|
|»» packet_loss_percentage|integer(int32)|false|The current packet loss percentage  value|
|» name|string|true|none|
|» timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|status|RTD_ISSUE_DETECTED|
|status|RTD_ISSUE_RESOLVED|
|name|device_rtd|

<h2 id="tocSdevicertdstatistics">DeviceRTDStatistics</h2>

<a id="schemadevicertdstatistics"></a>

```json
{
  "avg_max": "string",
  "avg_median": "string",
  "avg_min": "string",
  "device_id": 0,
  "latest_lost_packet_count": 0,
  "latest_median": "string",
  "latest_sent_packet_count": 0,
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|avg_max|string|false|none|
|avg_median|string|false|none|
|avg_min|string|false|none|
|device_id|integer(int32)|true|none|
|latest_lost_packet_count|integer(int32)|false|The number of lost packets of the latest collection sample|
|latest_median|string|false|The median value of the latest collection sample|
|latest_sent_packet_count|integer(int32)|false|The number of sent packets of the latest collection sample|
|timestamp|string(date-time)|true|The timestamp of the latest update|

<h2 id="tocSdevicesnmpevent">DeviceSNMPEvent</h2>

<a id="schemadevicesnmpevent"></a>

```json
{
  "data": {
    "agent_id": 0,
    "device_id": 0,
    "trigger_name": "string",
    "value": "string"
  },
  "name": "device_snmp",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when the status of an SNMP value changes*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device_id|integer(int32)|true|The `id` of the `device`|
|» trigger_name|string|false|none|
|» value|string|false|The current value of the SNMP sensor|
|name|string|true|none|
|timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|name|device_snmp|

<h2 id="tocSdevicesnmpcommunity">DeviceSnmpCommunity</h2>

<a id="schemadevicesnmpcommunity"></a>

```json
{
  "read": "string",
  "write": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|read|string|true|Defines new read snmp community|
|write|string|false|Defines new write snmp community (defaults to read community if not used)|

<h2 id="tocSdevicestatuschangeevent">DeviceStatusChangeEvent</h2>

<a id="schemadevicestatuschangeevent"></a>

```json
{
  "data": {
    "agent_id": 0,
    "device_id": 0,
    "value": "UP"
  },
  "name": "device_status",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when the status of a device changes*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device_id|integer(int32)|true|The `id` of the `device`|
|» value|string|false|none|
|name|string|true|none|
|timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|value|UP|
|value|DOWN|
|name|device_status|

<h2 id="tocSdevicetcpevent">DeviceTCPEvent</h2>

<a id="schemadevicetcpevent"></a>

```json
{
  "data": {
    "agent_id": 0,
    "device_id": 0,
    "value": [
      {
        "port": 0,
        "status": "UP"
      }
    ]
  },
  "name": "device_tcp",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when the status of a monitored TCP service changes*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device_id|integer(int32)|true|The `id` of the `device`|
|» value|[object]|false|none|
|»» port|integer(int32)|false|none|
|»» status|string|false|none|
|» name|string|true|none|
|» timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UP|
|status|DOWN|
|name|device_tcp|

<h2 id="tocSdomotzeyesusageinformation">DomotzEyesUsageInformation</h2>

<a id="schemadomotzeyesusageinformation"></a>

```json
{
  "limit": 0,
  "usage": {
    "snmp": 0,
    "tcp": 0,
    "total": 0
  }
}

```

*Information about Domotz Eyes current usage and limits*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|limit|integer(int32)|false|Number of allowed Domotz Eyes for the agent|
|usage|object|false|none|
|» snmp|integer(int32)|false|Number of configured Domotz Eyes of type `snmp` on the agent.|
|» tcp|integer(int32)|false|Number of configured Domotz Eyes of type `tcp` on the agent.|
|» total|integer(int32)|false|Number of configured Domotz Eyes on the agent.|

<h2 id="tocSdummydevice">DummyDevice</h2>

<a id="schemadummydevice"></a>

```json
{
  "authentication_status": "AUTHENTICATED",
  "details": {
    "room": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "protocol": "IP",
  "type": {
    "detected_id": 0,
    "id": 0
  },
  "user_data": {
    "model": "string",
    "name": "string",
    "type": 0,
    "vendor": "string"
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|

*and*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|object|false|A device that has no network access whatsoever and cannot be discovered or interacted with by      the agent.    A user can create a Dummy Device to attach it to a power outlet so that it is easier to remember which port controls the device|

<h2 id="tocSexternalipdevice">ExternalIpDevice</h2>

<a id="schemaexternalipdevice"></a>

```json
{
  "authentication_status": "AUTHENTICATED",
  "details": {
    "room": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "protocol": "IP",
  "type": {
    "detected_id": 0,
    "id": 0
  },
  "user_data": {
    "model": "string",
    "name": "string",
    "type": 0,
    "vendor": "string"
  },
  "agent_reachable": true,
  "grace_period": 0,
  "ip_addresses": [
    "string"
  ],
  "last_status_change": "2019-08-24T14:15:22Z",
  "model": "string",
  "status": "ONLINE",
  "vendor": "string",
  "names": {
    "host": "string",
    "inspection": "string"
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[IpDevice](#schemaipdevice)|false|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|object|false|A device added by the means of 'Advanced Monitoring': it is an IP device manually added by  the user, no discoveries are done over it, just periodical ping to see whether it is reachable|
|» names|object|false|none|
|»» host|string|false|none|
|»» inspection|string|false|none|

<h2 id="tocSipdevice">IpDevice</h2>

<a id="schemaipdevice"></a>

```json
{
  "authentication_status": "AUTHENTICATED",
  "details": {
    "room": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "protocol": "IP",
  "type": {
    "detected_id": 0,
    "id": 0
  },
  "user_data": {
    "model": "string",
    "name": "string",
    "type": 0,
    "vendor": "string"
  },
  "agent_reachable": true,
  "grace_period": 0,
  "ip_addresses": [
    "string"
  ],
  "last_status_change": "2019-08-24T14:15:22Z",
  "model": "string",
  "status": "ONLINE",
  "vendor": "string"
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|

*and*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|object|false|Base abstract class for all IP devices|
|» agent_reachable|boolean|false|When `true` the device is reachable by the agent over an IP network. When `false` Domotz knows about the status of the device by the means of another source e.g. a third party controller.  This field is significant only when the status of the device is `ONLINE` and its value is `false` because it means that even if the IP device is up and running, many features aren't allowed, such as the direct connection or the TCP services monitoring.|
|» grace_period|integer(int32)|false|The number of seconds a device must be unreachable before being declared DOWN|
|» ip_addresses|[string]|false|none|
|» last_status_change|string(date-time)|false|none|
|» model|string|false|none|
|» status|string|false|none|
|» vendor|string|false|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ONLINE|
|status|OFFLINE|
|status|DOWN|
|status|HIDDEN|

<h2 id="tocSlocalipdevice">LocalIpDevice</h2>

<a id="schemalocalipdevice"></a>

```json
{
  "authentication_status": "AUTHENTICATED",
  "details": {
    "room": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "protocol": "IP",
  "type": {
    "detected_id": 0,
    "id": 0
  },
  "user_data": {
    "model": "string",
    "name": "string",
    "type": 0,
    "vendor": "string"
  },
  "agent_reachable": true,
  "grace_period": 0,
  "ip_addresses": [
    "string"
  ],
  "last_status_change": "2019-08-24T14:15:22Z",
  "model": "string",
  "status": "ONLINE",
  "vendor": "string",
  "hw_address": "string",
  "is_jammed": true,
  "names": {
    "bonjour": "string",
    "dhcp": "string",
    "host": "string",
    "inspection": "string",
    "snmp": "string",
    "upnp": "string"
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[IpDevice](#schemaipdevice)|false|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|object|false|Standard device, automatically discovered in the local IP network of the agent.|
|» hw_address|string|false|MAC Address|
|» is_jammed|boolean|false|When true, the Domotz Agent is blocking the device to access the Internet. The device can still reach every other device in the local network|
|» names|object|false|none|
|»» bonjour|string|false|none|
|»» dhcp|string|false|none|
|»» host|string|false|none|
|»» inspection|string|false|none|
|»» snmp|string|false|none|
|»» upnp|string|false|none|

<h2 id="tocSnetworkspeedsample">NetworkSpeedSample</h2>

<a id="schemanetworkspeedsample"></a>

```json
{
  "timestamp": "2019-08-24T14:15:22Z",
  "values": [
    0
  ]
}

```

*A Network Speed Sample is the result of the measurement of the Internet download and upload
     speed, in bits per second, taken by the Agent*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|false|The time the sample was reported to Domotz|
|values|[integer]|false|A pair of values: the download and upload speed, in Bit Per Seconds (bps), as measured by the Agent|

<h2 id="tocSsnmpdomotzauthentication">SNMPDomotzAuthentication</h2>

<a id="schemasnmpdomotzauthentication"></a>

```json
{
  "authentication_key": "string",
  "authentication_protocol": "MD5",
  "encryption_key": "string",
  "encryption_protocol": "DES",
  "snmp_read_community": "string",
  "snmp_write_community": "string",
  "username": "string",
  "version": "V2"
}

```

*The SNMP authentication setting of a device*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|authentication_key|string|false|none|
|authentication_protocol|string|false|The SNMP authentication protocol|
|encryption_key|string|false|none|
|encryption_protocol|string|false|The SNMP encryption protocol|
|snmp_read_community|string|false|none|
|snmp_write_community|string|false|none|
|username|string|false|none|
|version|string|true|The configured SNMP version|

#### Enumerated Values

|Property|Value|
|---|---|
|authentication_protocol|MD5|
|authentication_protocol|SHA|
|encryption_protocol|DES|
|encryption_protocol|AES|
|version|V2|
|version|V1|
|version|V3_AUTH_PRIV|
|version|V3_NO_AUTH|
|version|V3_AUTH_NO_PRIV|

<h2 id="tocSsnmpdomotzeye">SNMPDomotzEye</h2>

<a id="schemasnmpdomotzeye"></a>

```json
{
  "category": "OTHER",
  "id": 0,
  "last_update": "2019-08-24T14:15:22Z",
  "latest_value": "string",
  "name": "string",
  "oid": "string",
  "value_type": "STRING"
}

```

*Information about a configured SNMP Domotz Eye*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|category|string|true|The category of the OID|
|id|integer(int32)|true|The unique identifier of the SNMP Domotz Eye|
|last_update|string(date-time)|true|The timestamp of the latest update|
|latest_value|string|true|The value retrieved on the OID|
|name|string|true|The name of the Domotz Eyes|
|oid|string|true|The OID string|
|value_type|string|true|The type of the OID|

#### Enumerated Values

|Property|Value|
|---|---|
|category|OTHER|
|category|CONSUMABLE|
|category|CPU|
|category|DISK_SPACE|
|category|MEMORY|
|category|NETWORK_TRAFFIC|
|category|TEMPERATURE|
|value_type|STRING|
|value_type|NUMERIC|

<h2 id="tocSsnmpdomotzeyecreation">SNMPDomotzEyeCreation</h2>

<a id="schemasnmpdomotzeyecreation"></a>

```json
{
  "category": "OTHER",
  "name": "string",
  "oid": "string",
  "value_type": "STRING"
}

```

*SNMP Domotz Eye Data*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|category|string|true|The category of the OID|
|name|string|true|The name of the Domotz Eyes|
|oid|string|true|The OID string|
|value_type|string|true|The type of the OID|

#### Enumerated Values

|Property|Value|
|---|---|
|category|OTHER|
|category|CONSUMABLE|
|category|CPU|
|category|DISK_SPACE|
|category|MEMORY|
|category|NETWORK_TRAFFIC|
|category|TEMPERATURE|
|value_type|STRING|
|value_type|NUMERIC|

<h2 id="tocSsubnetipdevice">SubnetIpDevice</h2>

<a id="schemasubnetipdevice"></a>

```json
{
  "authentication_status": "AUTHENTICATED",
  "details": {
    "room": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "protocol": "IP",
  "type": {
    "detected_id": 0,
    "id": 0
  },
  "user_data": {
    "model": "string",
    "name": "string",
    "type": 0,
    "vendor": "string"
  },
  "agent_reachable": true,
  "grace_period": 0,
  "ip_addresses": [
    "string"
  ],
  "last_status_change": "2019-08-24T14:15:22Z",
  "model": "string",
  "status": "ONLINE",
  "vendor": "string",
  "names": {
    "bonjour": "string",
    "host": "string",
    "inspection": "string",
    "snmp": "string",
    "upnp": "string"
  }
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[IpDevice](#schemaipdevice)|false|none|

*and*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|object|false|A device automatically discovered by the agent that exists in an IP subnet defined by the user.  The agent reaches the device through a Level 3 switch or similar device, so it cannot get the MAC address or other  level 2 information, such as DHCP lease data|
|» names|object|false|none|
|»» bonjour|string|false|none|
|»» host|string|false|none|
|»» inspection|string|false|none|
|»» snmp|string|false|none|
|»» upnp|string|false|none|

<h2 id="tocStcpdomotzeye">TCPDomotzEye</h2>

<a id="schematcpdomotzeye"></a>

```json
{
  "id": 0,
  "last_update": "2019-08-24T14:15:22Z",
  "port": 0,
  "status": "UP"
}

```

*Information about a configured TCP Domotz Eye*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|id|integer(int32)|true|The unique identifier of the TCP Domotz Eye|
|last_update|string(date-time)|true|The timestamp of the latest update|
|port|integer(int32)|true|The port number|
|status|string|true|The status of the TCP service|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UP|
|status|DOWN|

<h2 id="tocStcpdomotzeyecreation">TCPDomotzEyeCreation</h2>

<a id="schematcpdomotzeyecreation"></a>

```json
{
  "port": 0
}

```

*TCP Domotz Eye Data*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|port|integer(int32)|true|The port number|

<h2 id="tocSteam">Team</h2>

<a id="schemateam"></a>

```json
{
  "id": 0,
  "name": "string"
}

```

*Represents a team of the Company*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|id|integer(int32)|true|The identifier of the Team|
|name|string|true|The name of the Team|

<h2 id="tocSteamcreation">TeamCreation</h2>

<a id="schemateamcreation"></a>

```json
{
  "leader": {
    "details": {
      "display_name": "string"
    },
    "name": "string",
    "password": "string"
  },
  "name": "string"
}

```

*Team Creation under specified Area*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|leader|object|true|The Team Leader|
|» details|object|true|The Team Leader's details|
|»» display_name|string|true|The Team Leader's display name|
|» name|string|true|The Team Leader's name|
|» password|string|true|The Team Leader's password|
|name|string|true|The Team's name|

<h2 id="tocSuser">User</h2>

<a id="schemauser"></a>

```json
{
  "id": 0,
  "name": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|
|name|string|false|none|

