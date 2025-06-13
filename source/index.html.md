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

<h1 id="domotz-public-api">Domotz Public API v1.12.4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

### The Domotz Public API

Use the "API Key Endpoint" which you can retrieve from the Domotz Portal as the Base URL for your API calls.

The Domotz Public API uses standard HTTP response codes, authentication, and verbs. JSON format is used in responses and accepted for request bodies. All date-time formats are expressed as yyyy-mm-ddThh:mm:ss. Date-time must be expressed in UTC. Specification of different TimeZones are not allowed.

### Domotz Webhook
It is possible to subscribe to events happening on the Domotz platform, both at an Agent level and Device level, through the usage of Webhooks.

Please refer to the [user-guide](https://help.domotz.com/user-guide/shared-alerts-webhooks-ticketing-systems/) on the usage of the Webhook as a possible contact channel to receive notification of events and how to create a Shared Alert Profile. Moreover, refer to [getAlertProfiles](#getalertprofiles), [bindAlertProfileToAgent](#bindalertprofiletoagent) and [bindAlertProfileToDevice](#bindalertprofiletodevice) on how to retrieve the list of Shared Alert Profiles and bind to Agents and Devices respectively. In those same sections you also have the list of all the possible Webhook events and references to the Schemas.

<a href="https://www.domotz.com/terms-and-conditions/">Terms of service</a>
<br><a href="mailto:support@domotz.com">API Support</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **X-Api-Key**, in: header. Get you API Key from the <a href="https://portal.domotz.com/portal/settings/services?selected_menu=api_keys">Domotz Portal</a> or contact us

<h1 id="domotz-public-api-agent">agent</h1>

## listAgents

<a id="opIdlistAgents"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent',
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

fetch('{baseURL}/public-api/v1/agent',
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

r = requests.get('{baseURL}/public-api/v1/agent', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listagents-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer(int32)|false|The maximum number of items to return. Min value is 1. Max value is 100. Default value is 10|
|page_number|query|integer(int32)|false|The requested page number, 0-indexed. Default value is 0|
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
    "installation_info": {
      "contract_id": "string",
      "customer_id": "string"
    },
    "licence": {
      "activation_time": "2019-08-24T14:15:22Z",
      "bound_mac_address": "string",
      "code": "string",
      "expiration_time": "2019-08-24T14:15:22Z",
      "id": 0
    },
    "location": {
      "latitude": "string",
      "longitude": "string"
    },
    "organization": {
      "id": 0,
      "name": "string"
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
    "wan_info": {
      "hostname": "string",
      "ip": "string"
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
|» installation_info|object|false|none|
|»» contract_id|string|false|none|
|»» customer_id|string|false|none|
|» licence|object|false|none|
|»» activation_time|string(date-time)|false|none|
|»» bound_mac_address|string|false|The MAC address of the primary interface of the device the software agent runs on|
|»» code|string|false|none|
|»» expiration_time|string(date-time)|false|none|
|»» id|integer(int32)|false|none|
|» location|object|false|none|
|»» latitude|string|false|none|
|»» longitude|string|false|none|
|» organization|object|false|none|
|»» id|integer(int32)|false|none|
|»» name|string|false|none|
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
|» wan_info|object|false|none|
|»» hostname|string|false|none|
|»» ip|string|false|none|

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
curl -X HEAD {baseURL}/public-api/v1/agent \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent',
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

fetch('{baseURL}/public-api/v1/agent',
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

r = requests.head('{baseURL}/public-api/v1/agent', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.head '{baseURL}/public-api/v1/agent',
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
    req, err := http.NewRequest("HEAD", "{baseURL}/public-api/v1/agent", data)
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
<span class="dmt-command">curl -X HEAD</span> <span class="dmt-url">{baseURL}/public-api/v1/agent \
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
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}", data)
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
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id} \
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
curl -X GET {baseURL}/public-api/v1/agent/{agent_id} \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id} \
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
  "installation_info": {
    "contract_id": "string",
    "customer_id": "string"
  },
  "licence": {
    "activation_time": "2019-08-24T14:15:22Z",
    "bound_mac_address": "string",
    "code": "string",
    "expiration_time": "2019-08-24T14:15:22Z",
    "id": 0
  },
  "location": {
    "latitude": "string",
    "longitude": "string"
  },
  "organization": {
    "id": 0,
    "name": "string"
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
  "wan_info": {
    "hostname": "string",
    "ip": "string"
  },
  "listen_on": "string"
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
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/connection/consumption \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/connection/consumption',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/connection/consumption',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/connection/consumption', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/connection/consumption',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/connection/consumption", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/connection/consumption \
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

## getAgentVPNActiveConnections

<a id="opIdgetAgentVPNActiveConnections"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/connection/vpn-session`</span>

Get the Active VPN connections for the `agent`

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagentvpnactiveconnections-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
[
  {
    "bytes": 0,
    "creation_time": "2019-08-24T14:15:22Z",
    "expiration_time": "2019-08-24T14:15:22Z",
    "id": 0,
    "name": "string",
    "status": "ACTIVE"
  }
]
```

<h3 id="getagentvpnactiveconnections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Agent VPN Connection information|Inline|

<h3 id="getagentvpnactiveconnections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[AgentVPNActiveConnection](#schemaagentvpnactiveconnection)]|false|none|
|» bytes|integer(int32)|true|Current VPN connection consumption (bytes)|
|» creation_time|string(date-time)|true|none|
|» expiration_time|string(date-time)|true|none|
|» id|integer(int32)|true|The ID of the VPN connection|
|» name|string|true|The user that started the VPN connection|
|» status|string|true|The status of the vpn connection|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|EXPIRED|

<h1 id="domotz-public-api-metrics">metrics</h1>

## getAgentListUptime

<a id="opIdgetAgentListUptime"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/uptime \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/uptime',
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

fetch('{baseURL}/public-api/v1/agent/uptime',
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

r = requests.get('{baseURL}/public-api/v1/agent/uptime', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/uptime',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/uptime", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/uptime`</span>

Returns the uptime of all agents

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/uptime \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagentlistuptime-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|string(date-time)|false|The start time of the time series. Default value is one week|
|to|query|string(date-time)|false|The end time of the time series. Default value is now|

> Example responses

> 200 Response

```json
[
  {
    "agent_id": 0,
    "downtime_intervals": [
      {
        "end": "2019-08-24T14:15:22Z",
        "start": "2019-08-24T14:15:22Z"
      }
    ],
    "online_seconds": 0,
    "total_seconds": 0,
    "uptime": "string"
  }
]
```

<h3 id="getagentlistuptime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The uptime of the agents|Inline|

<h3 id="getagentlistuptime-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[AgentUptime](#schemaagentuptime)]|false|none|
|» agent_id|integer(int32)|true|none|
|» downtime_intervals|[object]|false|none|
|»» end|string(date-time)|false|none|
|»» start|string(date-time)|false|none|
|» online_seconds|integer(int32)|true|none|
|» total_seconds|integer(int32)|true|none|
|» uptime|string|true|The uptime percentage of the agent|

## getAgentRTDStats

<a id="opIdgetAgentRTDStats"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/rtd \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/rtd',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/rtd',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/rtd', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/rtd',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/rtd", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/rtd \
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
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/network/event \
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
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/history/rtd \
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

## getDeviceUptime

<a id="opIdgetDeviceUptime"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/uptime \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/uptime',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/uptime',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/uptime', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/uptime',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/uptime", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/uptime`</span>

Returns the uptime of the device

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/uptime \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getdeviceuptime-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|from|query|string(date-time)|false|The start time of the time series. Default value is one week|
|to|query|string(date-time)|false|The end time of the time series. Default value is now|

> Example responses

> 200 Response

```json
{
  "agent_uptime": "string",
  "downtime_intervals": [
    {
      "end": "2019-08-24T14:15:22Z",
      "start": "2019-08-24T14:15:22Z"
    }
  ],
  "online_seconds": 0,
  "total_seconds": 0,
  "uptime": "string"
}
```

<h3 id="getdeviceuptime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The uptime of the device|[DeviceUptime](#schemadeviceuptime)|

## getAgentStatusHistory

<a id="opIdgetAgentStatusHistory"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/history/network/event \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/history/network/event',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/history/network/event',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/history/network/event', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/history/network/event',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/history/network/event", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/history/network/event \
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
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/history/network/speed \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/history/network/speed',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/history/network/speed',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/history/network/speed', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/history/network/speed',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/history/network/speed", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/history/network/speed \
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

## getAgentUptime

<a id="opIdgetAgentUptime"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/uptime \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/uptime',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/uptime',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/uptime', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/uptime',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/uptime", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/uptime`</span>

Returns the uptime of the agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/uptime \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagentuptime-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|from|query|string(date-time)|false|The start time of the time series. Default value is one week|
|to|query|string(date-time)|false|The end time of the time series. Default value is now|

> Example responses

> 200 Response

```json
{
  "agent_id": 0,
  "downtime_intervals": [
    {
      "end": "2019-08-24T14:15:22Z",
      "start": "2019-08-24T14:15:22Z"
    }
  ],
  "online_seconds": 0,
  "total_seconds": 0,
  "uptime": "string"
}
```

<h3 id="getagentuptime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The uptime of the agent|[AgentUptime](#schemaagentuptime)|

<h1 id="domotz-public-api-activity-log">Activity Log</h1>

## getAgentActivityLog

<a id="opIdgetAgentActivityLog"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/activity-log \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/activity-log',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/activity-log',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/activity-log', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/activity-log',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/activity-log", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/activity-log`</span>

Retrieves the activity log of an agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/activity-log \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagentactivitylog-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|from|query|string(date-time)|false|The start time of the time series. Default value is one week|
|to|query|string(date-time)|false|The end time of the time series. Default value is now|
|type|query|string|false|If present, only the specified type(s) will be fetched.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|note|
|type|agent_alert_level_set|
|type|agent_alert_resume|
|type|rtd_session_start|
|type|cresnet_node_reboot|
|type|device_reboot|
|type|firmware_update_start|
|type|applications_terminate|
|type|configuration_restore|
|type|factory_reset|
|type|network_configuration_change|
|type|custom_driver_execute|
|type|remote_session_start|
|type|remote_session_terminate|
|type|remote_session_limit_reached|
|type|vpn_session_start|
|type|vpn_session_terminate|
|type|chat_started|
|type|chat_resolved|
|type|operator_joined|
|type|operator_left|
|type|power_on|
|type|power_off|
|type|power_cycle|
|type|camera_snapshot|
|type|camera_streaming_start|
|type|configuration_management_status_change|

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "details": {},
    "device_id": 0,
    "timestamp": "2019-08-24T14:15:22Z",
    "type": "note",
    "user": "string"
  }
]
```

<h3 id="getagentactivitylog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of activity log entries|Inline|

<h3 id="getagentactivitylog-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[ActivityLog](#schemaactivitylog)]|false|[An activity log item]|
|» description|string|true|Description of the event|
|» details|object|false|Additional details of the event|
|» device_id|integer(int32)|false|Device that triggered the event (if applicable)|
|» timestamp|string(date-time)|true|Timestamp of the event|
|» type|string|true|Type of the event|
|» user|string|true|User who triggered the event|

#### Enumerated Values

|Property|Value|
|---|---|
|type|note|
|type|agent_alert_level_set|
|type|agent_alert_resume|
|type|rtd_session_start|
|type|cresnet_node_reboot|
|type|device_reboot|
|type|firmware_update_start|
|type|applications_terminate|
|type|configuration_restore|
|type|factory_reset|
|type|network_configuration_change|
|type|custom_driver_execute|
|type|remote_session_start|
|type|remote_session_terminate|
|type|remote_session_limit_reached|
|type|vpn_session_start|
|type|vpn_session_terminate|
|type|chat_started|
|type|chat_resolved|
|type|operator_joined|
|type|operator_left|
|type|power_on|
|type|power_off|
|type|power_cycle|
|type|camera_snapshot|
|type|camera_streaming_start|
|type|configuration_management_status_change|

<h1 id="domotz-public-api-actions">actions</h1>

## createAgentVPNConnection

<a id="opIdcreateAgentVPNConnection"></a>

> Code samples

```shell
curl -X POST {baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session',
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
  "routing_policy": "global",
  "ttl_hours": 1
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session',
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
  'Accept': 'text/plain',
  'X-Api-Key': 'API_KEY'
}

r = requests.post('{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain',
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post '{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session',
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
        "Accept": []string{"text/plain"},
        "X-Api-Key": []string{"API_KEY"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /agent/{agent_id}/connection/vpn-session`</span>

Creates a temporary VPN server on the `agent` and returns the vpn configuration file content. Current consumption and consumption limits can be retrieved with a call to <a href='#getconnectionconsumption'> getConnectionConsumption</a> endpoint

> Body parameter

```json
{
  "allowed_ip": "string",
  "routing_policy": "global",
  "ttl_hours": 1
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="createagentvpnconnection-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|body|body|[AgentVPNConnection](#schemaagentvpnconnection)|true|none|

> Example responses

> 201 Response

<h3 id="createagentvpnconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|OpenVPN Configuration file content|string|

## deleteAgentVPNConnection

<a id="opIddeleteAgentVPNConnection"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session/{vpn_session_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session/{vpn_session_id}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session/{vpn_session_id}',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session/{vpn_session_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session/{vpn_session_id}',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session/{vpn_session_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/connection/vpn-session/{vpn_session_id}`</span>

Closes an active VPN connection session for the `agent`

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/connection/vpn-session/{vpn_session_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deleteagentvpnconnection-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|vpn_session_id|path|integer(int32)|true|Session ID|

<h3 id="deleteagentvpnconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## connectToDevice

<a id="opIdconnectToDevice"></a>

> Code samples

```shell
curl -X POST {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/connection \
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
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/connection',
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
  "protocol": "http",
  "ttl_hours": 1
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/connection',
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

r = requests.post('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/connection', params={

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

result = RestClient.post '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/connection',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/connection", data)
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
  "protocol": "http",
  "ttl_hours": 1
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/connection \
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

<h1 id="domotz-public-api-device">device</h1>

## deleteDownDevices

<a id="opIddeleteDownDevices"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id}/device \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}/device', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}/device',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}/device", data)
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
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device \
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
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device \
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
    "authentication_status": "NO_AUTHENTICATION",
    "details": {
      "firmware_version": "string",
      "notes": "string",
      "room": "string",
      "serial": "string",
      "snmp_read_community": "string",
      "snmp_write_community": "string",
      "zone": "string"
    },
    "display_name": "string",
    "first_seen_on": "2019-08-24T14:15:22Z",
    "id": 0,
    "importance": "VITAL",
    "main_id": 0,
    "os": {
      "build": "string",
      "name": "string",
      "version": "string"
    },
    "protocol": "IP",
    "snmp_status": "CHECKING",
    "type": {
      "detected_id": 0,
      "id": 0,
      "label": "string"
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
|authentication_status|NO_AUTHENTICATION|
|authentication_status|AUTHENTICATED|
|authentication_status|PENDING|
|authentication_status|REQUIRED|
|authentication_status|WRONG_CREDENTIALS|
|importance|VITAL|
|importance|FLOATING|
|protocol|IP|
|protocol|DUMMY|
|protocol|IP_EXTERNAL|
|snmp_status|CHECKING|
|snmp_status|NOT_FOUND|
|snmp_status|NOT_AUTHENTICATED|
|snmp_status|AUTHENTICATED|
|status|ONLINE|
|status|OFFLINE|
|status|DOWN|
|status|HIDDEN|

## listAgentDeviceApplications

<a id="opIdlistAgentDeviceApplications"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/application \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/application',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/application',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/application', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/application',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/application", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/application`</span>

Retrieves the list of applications of all the devices belonging to the agent. The feature is only available on agents under the Enterprise Plan

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/application \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listagentdeviceapplications-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|page_size|query|integer(int32)|false|The maximum number of items to return. Min value is 1. Max value is 1000. Default value is 100|
|page_number|query|integer(int32)|false|The requested page number, 0-indexed. Default value is 0|
|name|query|string|false|Allows filtering by `name`|
|device_ids|query|string|false|Allows filtering by `device_ids`|

> Example responses

> 200 Response

```json
[
  {
    "application_id": "string",
    "device_id": "string",
    "first_time_seen": "2019-08-24T14:15:22Z",
    "info": "string",
    "install_date": "2019-08-24T14:15:22Z",
    "install_location": "string",
    "last_modified": "2019-08-24T14:15:22Z",
    "last_update": "2019-08-24T14:15:22Z",
    "name": "string",
    "publisher": "string",
    "version": "string"
  }
]
```

<h3 id="listagentdeviceapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of applications of all the devices belonging to the agent|Inline|

<h3 id="listagentdeviceapplications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[AgentDeviceApplication](#schemaagentdeviceapplication)]|false|[The list of applications of all devices belonging to the agent]|
|» application_id|string|true|none|
|» device_id|string|true|none|
|» first_time_seen|string(date-time)|true|none|
|» info|string|false|none|
|» install_date|string(date-time)|false|none|
|» install_location|string|false|none|
|» last_modified|string(date-time)|false|none|
|» last_update|string(date-time)|false|none|
|» name|string|false|none|
|» publisher|string|false|none|
|» version|string|false|none|

## countAgentDeviceApplications

<a id="opIdcountAgentDeviceApplications"></a>

> Code samples

```shell
curl -X HEAD {baseURL}/public-api/v1/agent/{agent_id}/device/application \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/application',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/application',
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

r = requests.head('{baseURL}/public-api/v1/agent/{agent_id}/device/application', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.head '{baseURL}/public-api/v1/agent/{agent_id}/device/application',
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
    req, err := http.NewRequest("HEAD", "{baseURL}/public-api/v1/agent/{agent_id}/device/application", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`HEAD /agent/{agent_id}/device/application`</span>

Counts the applications of all devices belonging to the agent. The feature is only available on agents under the Enterprise Plan

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X HEAD</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/application \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="countagentdeviceapplications-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|name|query|string|false|Allows filtering by `name`|
|device_ids|query|string|false|Allows filtering by `device_ids`|

<h3 id="countagentdeviceapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Returns the application count|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-Entities-Count|integer|int32|Returns the application count|

## createExternalHost

<a id="opIdcreateExternalHost"></a>

> Code samples

```shell
curl -X POST {baseURL}/public-api/v1/agent/{agent_id}/device/external-host \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/external-host',
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
  "host": "string",
  "name": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/external-host',
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

r = requests.post('{baseURL}/public-api/v1/agent/{agent_id}/device/external-host', params={

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

result = RestClient.post '{baseURL}/public-api/v1/agent/{agent_id}/device/external-host',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/agent/{agent_id}/device/external-host", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /agent/{agent_id}/device/external-host`</span>

Creates an external host

> Body parameter

```json
{
  "host": "string",
  "name": "string"
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/external-host \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="createexternalhost-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|body|body|[ExternalHost](#schemaexternalhost)|true|none|

<h3 id="createexternalhost-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

## deleteDevice

<a id="opIddeleteDevice"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}", data)
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
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id} \
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
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id} \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id} \
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
  "authentication_status": "NO_AUTHENTICATION",
  "details": {
    "firmware_version": "string",
    "notes": "string",
    "room": "string",
    "serial": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "os": {
    "build": "string",
    "name": "string",
    "version": "string"
  },
  "protocol": "IP",
  "snmp_status": "CHECKING",
  "type": {
    "detected_id": 0,
    "id": 0,
    "label": "string"
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
|authentication_status|NO_AUTHENTICATION|
|authentication_status|AUTHENTICATED|
|authentication_status|PENDING|
|authentication_status|REQUIRED|
|authentication_status|WRONG_CREDENTIALS|
|importance|VITAL|
|importance|FLOATING|
|protocol|IP|
|protocol|DUMMY|
|protocol|IP_EXTERNAL|
|snmp_status|CHECKING|
|snmp_status|NOT_FOUND|
|snmp_status|NOT_AUTHENTICATED|
|snmp_status|AUTHENTICATED|
|status|ONLINE|
|status|OFFLINE|
|status|DOWN|
|status|HIDDEN|

## getDevicePowerActions

<a id="opIdgetDevicePowerActions"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power \
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
curl -X POST {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field}',
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

r = requests.post('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field}',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field}", data)
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
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/action/power/{field} \
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

## listDeviceApplications

<a id="opIdlistDeviceApplications"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/application`</span>

Retrieves the list of applications of the device. The feature is only available on agents under the Enterprise Plan

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listdeviceapplications-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|page_size|query|integer(int32)|false|The maximum number of items to return. Min value is 1. Max value is 1000. Default value is 100|
|page_number|query|integer(int32)|false|The requested page number, 0-indexed. Default value is 0|
|name|query|string|false|Allows filtering by `name`|
|device_ids|query|string|false|Allows filtering by `device_ids`|

> Example responses

> 200 Response

```json
[
  {
    "application_id": "string",
    "first_time_seen": "2019-08-24T14:15:22Z",
    "info": "string",
    "install_date": "2019-08-24T14:15:22Z",
    "install_location": "string",
    "last_modified": "2019-08-24T14:15:22Z",
    "last_update": "2019-08-24T14:15:22Z",
    "name": "string",
    "publisher": "string",
    "version": "string"
  }
]
```

<h3 id="listdeviceapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of applications of the device|Inline|

<h3 id="listdeviceapplications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[DeviceApplication](#schemadeviceapplication)]|false|[The list of applications of a device]|
|» application_id|string|true|none|
|» first_time_seen|string(date-time)|true|none|
|» info|string|false|none|
|» install_date|string(date-time)|false|none|
|» install_location|string|false|none|
|» last_modified|string(date-time)|false|none|
|» last_update|string(date-time)|false|none|
|» name|string|false|none|
|» publisher|string|false|none|
|» version|string|false|none|

## countDeviceApplications

<a id="opIdcountDeviceApplications"></a>

> Code samples

```shell
curl -X HEAD {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application',
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

r = requests.head('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.head '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application',
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
    req, err := http.NewRequest("HEAD", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`HEAD /agent/{agent_id}/device/{device_id}/application`</span>

Counts the applications. The feature is only available on agents under the Enterprise Plan

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X HEAD</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/application \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="countdeviceapplications-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|name|query|string|false|Allows filtering by `name`|
|device_ids|query|string|false|Allows filtering by `device_ids`|

<h3 id="countdeviceapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Returns the application count|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-Entities-Count|integer|int32|Returns the application count|

## setCredentials

<a id="opIdsetCredentials"></a>

> Code samples

```shell
curl -X PUT {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/credentials \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/credentials',
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
  "scope": "DEVICE_MANAGEMENT",
  "username": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/credentials',
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

r = requests.put('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/credentials', params={

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

result = RestClient.put '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/credentials',
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
    req, err := http.NewRequest("PUT", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/credentials", data)
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
  "scope": "DEVICE_MANAGEMENT",
  "username": "string"
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/credentials \
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

## getDeviceOutlets

<a id="opIdgetDeviceOutlets"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/power-outlet`</span>

Returns a list of the power outlets discovered on the device

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getdeviceoutlets-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|

> Example responses

> 200 Response

```json
[
  {
    "can_write": true,
    "custom_name": "string",
    "device_id": 0,
    "id": "string",
    "links": [
      0
    ],
    "name": "string",
    "power": "ON"
  }
]
```

<h3 id="getdeviceoutlets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of outlet objects|Inline|

<h3 id="getdeviceoutlets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[DeviceOutlet](#schemadeviceoutlet)]|false|[Power outlet of a device]|
|» can_write|boolean|true|True if power actions can be executed on the outlet|
|» custom_name|string|false|Name of the outlet assigned by the user|
|» device_id|integer(int32)|true|Unique identifier of the device the outlet belongs to|
|» id|string|true|Unique identifier of the outlet|
|» links|[integer]|true|List of device ids attached to the outlet|
|» name|string|true|Name of the outlet discovered automatically|
|» power|string|true|The current power state of the outlet|

#### Enumerated Values

|Property|Value|
|---|---|
|power|ON|
|power|OFF|
|power|unknown|

## updateDeviceOutlet

<a id="opIdupdateDeviceOutlet"></a>

> Code samples

```shell
curl -X PUT {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}',
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
  "custom_name": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}',
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

r = requests.put('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}', params={

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

result = RestClient.put '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}',
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
    req, err := http.NewRequest("PUT", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}`</span>

Update the power outlet with the specified custom name

> Body parameter

```json
{
  "custom_name": "string"
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="updatedeviceoutlet-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|power_outlet_id|path|string|true|Outlet ID|
|body|body|[DeviceOutletUpdate](#schemadeviceoutletupdate)|false|none|

<h3 id="updatedeviceoutlet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## triggerOutletAction

<a id="opIdtriggerOutletAction"></a>

> Code samples

```shell
curl -X POST {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/action/{action} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/action/{action}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/action/{action}',
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

r = requests.post('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/action/{action}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/action/{action}',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/action/{action}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/action/{action}`</span>

Trigger an action on a power outlet

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/action/{action} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="triggeroutletaction-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|power_outlet_id|path|string|true|Outlet ID|
|action|path|string|true|Action to perform on the outlet|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|on|
|action|off|
|action|cycle|

<h3 id="triggeroutletaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|none|None|

## detachDeviceFromOutlet

<a id="opIddetachDeviceFromOutlet"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id}',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id}',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id}`</span>

Detach a device from a power outlet

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="detachdevicefromoutlet-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|power_outlet_id|path|string|true|Outlet ID|
|attached_device_id|path|integer(int32)|true|Device ID|

<h3 id="detachdevicefromoutlet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## attachDeviceToOutlet

<a id="opIdattachDeviceToOutlet"></a>

> Code samples

```shell
curl -X POST {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id}',
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

r = requests.post('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id}',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id}`</span>

Attach a device to a power outlet

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/power-outlet/{power_outlet_id}/attach/{attached_device_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="attachdevicetooutlet-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|power_outlet_id|path|string|true|Outlet ID|
|attached_device_id|path|integer(int32)|true|Device ID|

<h3 id="attachdevicetooutlet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## getSNMPAuthentication

<a id="opIdgetSNMPAuthentication"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication \
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
curl -X PUT {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication',
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

r = requests.put('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication', params={

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

result = RestClient.put '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication',
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
    req, err := http.NewRequest("PUT", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication", data)
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
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-authentication \
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
curl -X PUT {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community',
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

r = requests.put('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community', params={

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

result = RestClient.put '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community',
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
    req, err := http.NewRequest("PUT", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community", data)
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
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/snmp-community \
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
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/visibility \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/visibility',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/visibility',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/visibility', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/visibility',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/visibility", data)
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
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/visibility \
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
curl -X PUT {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/{field} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/{field}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/{field}',
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

r = requests.put('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/{field}', params={

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

result = RestClient.put '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/{field}',
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
    req, err := http.NewRequest("PUT", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/{field}", data)
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
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/{field} \
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
|field|path|string|true|The field to update - for the type and valid values see the description of the corresponding output parameter <a href="#tocSabstractdevice">here</a>|
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
|field|details/serial|
|field|details/notes|

<h3 id="editdevice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

<h1 id="domotz-public-api-snmp-tcp-sensors">SNMP/TCP SENSORS</h1>

## listAgentEyesSNMP

<a id="opIdlistAgentEyesSNMP"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/eye/snmp \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/eye/snmp',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/eye/snmp',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/eye/snmp', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/eye/snmp',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/eye/snmp", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/eye/snmp`</span>

Retrieves the list of configured SNMP Domotz Sensors on the agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/eye/snmp \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listagenteyessnmp-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
[
  {
    "category": "OTHER",
    "device_id": 0,
    "id": 0,
    "name": "string",
    "oid": "string",
    "value_type": "STRING"
  }
]
```

<h3 id="listagenteyessnmp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of configured SNMP Domotz Sensors on the agent|Inline|

<h3 id="listagenteyessnmp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[SNMPDomotzAgentEye](#schemasnmpdomotzagenteye)]|false|[Information about a configured SNMP Domotz Sensor]|
|» category|string|true|The category of the OID|
|» device_id|integer(int32)|false|The unique identifier of the device|
|» id|integer(int32)|true|The ID of the SNMP Domotz Sensor|
|» name|string|true|The name of the Domotz Sensors|
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
|value_type|ENUM|

## listAgentEyesTCP

<a id="opIdlistAgentEyesTCP"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/eye/tcp \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/eye/tcp',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/eye/tcp',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/eye/tcp', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/eye/tcp',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/eye/tcp", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/eye/tcp`</span>

Retrieves the list of configured TCP Domotz Sensors on the agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/eye/tcp \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listagenteyestcp-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
[
  {
    "device_id": 0,
    "id": 0,
    "last_update": "2019-08-24T14:15:22Z",
    "port": 0,
    "status": "UP"
  }
]
```

<h3 id="listagenteyestcp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of configured TCP Domotz Sensors on the agent and their latest values|Inline|

<h3 id="listagenteyestcp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[TCPDomotzEye](#schematcpdomotzeye)]|false|[Information about a configured TCP Domotz Sensor]|
|» device_id|integer(int32)|false|The unique identifier of the device|
|» id|integer(int32)|true|The ID of the TCP Domotz Sensor|
|» last_update|string(date-time)|true|The timestamp of the latest update|
|» port|integer(int32)|true|The port number|
|» status|string|true|The status of the TCP service|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UP|
|status|DOWN|

## listEyesSNMP

<a id="opIdlistEyesSNMP"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/eye/snmp`</span>

Retrieves the list of configured SNMP Domotz Sensors

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp \
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
    "device_id": 0,
    "id": 0,
    "last_update": "2019-08-24T14:15:22Z",
    "latest_enum_value": "string",
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of configured SNMP Domotz Sensors for the device and their latest values|Inline|

<h3 id="listeyessnmp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[SNMPDomotzEye](#schemasnmpdomotzeye)]|false|[Information about a configured SNMP Domotz Sensor]|
|» category|string|true|The category of the OID|
|» device_id|integer(int32)|false|The unique identifier of the device|
|» id|integer(int32)|true|The ID of the SNMP Domotz Sensor|
|» last_update|string(date-time)|true|The timestamp of the latest update|
|» latest_enum_value|string|false|The enum value retrieved on the OID|
|» latest_value|string|true|The value retrieved on the OID|
|» name|string|true|The name of the Domotz Sensors|
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
|value_type|ENUM|

## createEyeSNMP

<a id="opIdcreateEyeSNMP"></a>

> Code samples

```shell
curl -X POST {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp',
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

r = requests.post('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp', params={

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

result = RestClient.post '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /agent/{agent_id}/device/{device_id}/eye/snmp`</span>

Creates a new SNMP Domotz Sensors

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
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp \
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
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}`</span>

Deletes the SNMP Domotz Sensor

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deleteeyesnmp-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|sensor_id|path|integer(int32)|true|SNMP Sensor ID|

<h3 id="deleteeyesnmp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## listEyesSNMPTriggerFunction

<a id="opIdlistEyesSNMPTriggerFunction"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/function \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/function',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/function',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/function', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/function',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/function", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/function`</span>

Retrieves the list of functions for the SNMP trigger Domotz Sensors

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/function \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listeyessnmptriggerfunction-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|sensor_id|path|integer(int32)|true|SNMP Sensor ID|

> Example responses

> 200 Response

```json
[
  {
    "cardinality": 0,
    "id": 0,
    "name": "string",
    "value_types": "STRING"
  }
]
```

<h3 id="listeyessnmptriggerfunction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of functions that can be used by the trigger|Inline|

<h3 id="listeyessnmptriggerfunction-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[SNMPDomotzEyeTriggerFunction](#schemasnmpdomotzeyetriggerfunction)]|false|[Information about a trigger function]|
|» cardinality|integer(int32)|true|The number of arguments of the function|
|» id|integer(int32)|true|The unique identifier of the SNMP Trigger function|
|» name|string|true|The name of the function|
|» value_types|string|true|The type of the operands|

#### Enumerated Values

|Property|Value|
|---|---|
|value_types|STRING|
|value_types|NUMERIC|
|value_types|ENUM|

## getEyesSNMPHistory

<a id="opIdgetEyesSNMPHistory"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/history \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/history',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/history',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/history', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/history',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/history", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/history`</span>

Returns the time series of the SNMP Domotz Sensors collected samples

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/history \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="geteyessnmphistory-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|sensor_id|path|integer(int32)|true|SNMP Sensor ID|
|from|query|string(date-time)|false|The start time of the time series. Default value is one week|
|to|query|string(date-time)|false|The end time of the time series. Default value is now|

> Example responses

> 200 Response

```json
[
  {
    "enum_value": "string",
    "timestamp": "2019-08-24T14:15:22Z",
    "value": "string"
  }
]
```

<h3 id="geteyessnmphistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of SNMP Domotz Sensors samples|Inline|

<h3 id="geteyessnmphistory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[DeviceEyeSNMPHistorySample](#schemadeviceeyesnmphistorysample)]|false|none|
|» enum_value|string|false|none|
|» timestamp|string(date-time)|true|The time the sample was reported to Domotz|
|» value|string|true|none|

## listEyesSNMPTrigger

<a id="opIdlistEyesSNMPTrigger"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger`</span>

Retrieves the list of triggers for the SNMP Sensor

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listeyessnmptrigger-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|sensor_id|path|integer(int32)|true|SNMP Sensor ID|

> Example responses

> 200 Response

```json
[
  {
    "alert": {
      "email": true,
      "mobile": true
    },
    "creation_time": "2019-08-24T14:15:22Z",
    "function_id": 0,
    "id": 0,
    "name": "string",
    "operands": [
      "string"
    ]
  }
]
```

<h3 id="listeyessnmptrigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of triggers associated to the sensor|Inline|

<h3 id="listeyessnmptrigger-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[SNMPDomotzEyeTrigger](#schemasnmpdomotzeyetrigger)]|false|[Information about a trigger]|
|» alert|object|false|The alerts details|
|»» email|boolean|false|True if the email alert is active|
|»» mobile|boolean|false|True if the mobile alert is active|
|» creation_time|string(date-time)|false|none|
|» function_id|integer(int32)|true|The unique identifier of the function assigned to the trigger|
|» id|integer(int32)|true|The unique identifier of the SNMP Trigger|
|» name|string|true|The name of the trigger|
|» operands|[string]|true|The operands for the function|

## createEyeSNMPTrigger

<a id="opIdcreateEyeSNMPTrigger"></a>

> Code samples

```shell
curl -X POST {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger',
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
  "function_id": 0,
  "name": "string",
  "operands": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger',
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

r = requests.post('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger', params={

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

result = RestClient.post '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger`</span>

Creates a new SNMP Trigger for the sensor. 

For instance, to receive a notification when the value of the sensor is above a threshold x, it is required to add a trigger specifying the function_id = 2 (is greater than) and the operand value equals to [x]. 
The function_id value can be retrieved with the listEyesSNMPTriggerFunction call. 
To activate the alert, it is required to call createEyeSNMPTriggerAlert after the trigger creation.

> Body parameter

```json
{
  "function_id": 0,
  "name": "string",
  "operands": [
    "string"
  ]
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="createeyesnmptrigger-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|sensor_id|path|integer(int32)|true|SNMP Sensor ID|
|body|body|[SNMPDomotzSnmpTriggerCreation](#schemasnmpdomotzsnmptriggercreation)|true|none|

<h3 id="createeyesnmptrigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

## deleteEyeSNMPTrigger

<a id="opIddeleteEyeSNMPTrigger"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}`</span>

Deletes the SNMP Trigger for the sensor

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deleteeyesnmptrigger-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|sensor_id|path|integer(int32)|true|SNMP Sensor ID|
|trigger_id|path|integer(int32)|true|SNMP Sensor Trigger ID|

<h3 id="deleteeyesnmptrigger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## deleteEyeSNMPTriggerAlert

<a id="opIddeleteEyeSNMPTriggerAlert"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name}',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name}',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name}`</span>

Deletes the alert for thee SNMP Trigger

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deleteeyesnmptriggeralert-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|sensor_id|path|integer(int32)|true|SNMP Sensor ID|
|trigger_id|path|integer(int32)|true|SNMP Sensor Trigger ID|
|medium_name|path|string|true|the name of the medium|

#### Enumerated Values

|Parameter|Value|
|---|---|
|medium_name|email|
|medium_name|mobile|

<h3 id="deleteeyesnmptriggeralert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## createEyeSNMPTriggerAlert

<a id="opIdcreateEyeSNMPTriggerAlert"></a>

> Code samples

```shell
curl -X POST {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name}',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name}',
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

r = requests.post('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name}', params={

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

result = RestClient.post '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name}',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name}`</span>

Add an alert to a SNMP Trigger

> Body parameter

```json
{}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/snmp/{sensor_id}/trigger/{trigger_id}/alert/{medium_name} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="createeyesnmptriggeralert-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|sensor_id|path|integer(int32)|true|SNMP Sensor ID|
|trigger_id|path|integer(int32)|true|SNMP Sensor Trigger ID|
|medium_name|path|string|true|the name of the medium|
|body|body|[SNMPDomotzSnmpTriggerAlertCreation](#schemasnmpdomotzsnmptriggeralertcreation)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|medium_name|email|
|medium_name|mobile|

<h3 id="createeyesnmptriggeralert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

## listEyesTCP

<a id="opIdlistEyesTCP"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/eye/tcp`</span>

Retrieves the list of configured TCP Domotz Sensors

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp \
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
    "device_id": 0,
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of configured TCP Domotz Sensors for the device and their latest values|Inline|

<h3 id="listeyestcp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[TCPDomotzEye](#schematcpdomotzeye)]|false|[Information about a configured TCP Domotz Sensor]|
|» device_id|integer(int32)|false|The unique identifier of the device|
|» id|integer(int32)|true|The ID of the TCP Domotz Sensor|
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
curl -X POST {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp',
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

r = requests.post('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp', params={

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

result = RestClient.post '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /agent/{agent_id}/device/{device_id}/eye/tcp`</span>

Creates a new TCP Domotz Sensors

> Body parameter

```json
{
  "port": 0
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp \
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
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id}',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id}',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/device/{device_id}/eye/tcp/{service_id}`</span>

Deletes the TCP Domotz Sensor

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/eye/tcp/{service_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deleteeyetcp-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|service_id|path|integer(int32)|true|TCP Sensor ID|

<h3 id="deleteeyetcp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## eyesUsageInfo

<a id="opIdeyesUsageInfo"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/eye-statistics \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/eye-statistics',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/eye-statistics',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/eye-statistics', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/eye-statistics',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/eye-statistics", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/eye-statistics`</span>

Retrieves information about Domotz Sensors usage and limits

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/eye-statistics \
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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A data structure containing information about current Domotz Sensors usage and limits|[DomotzEyesUsageInformation](#schemadomotzeyesusageinformation)|

## MetricUsageInfo

<a id="opIdMetricUsageInfo"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/metric-statistics \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/metric-statistics',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/metric-statistics',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/metric-statistics', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/metric-statistics',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/metric-statistics", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/metric-statistics`</span>

Returns Domotz Sensors usage and limits

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/metric-statistics \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="metricusageinfo-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
{
  "limit": 0,
  "usage": {
    "custom_driver": 0,
    "snmp": 0,
    "tcp": 0,
    "total": 0
  }
}
```

<h3 id="metricusageinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Current Domotz Sensors usage and limits|[DomotzMetricUsageInformation](#schemadomotzmetricusageinformation)|

<h1 id="domotz-public-api-variables">variables</h1>

## listAgentDeviceVariables

<a id="opIdlistAgentDeviceVariables"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/variable \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/variable',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/variable',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/variable', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/variable',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/variable", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/variable`</span>

Retrieves the list of all device variables of the agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/variable \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listagentdevicevariables-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|page_size|query|integer(int32)|false|The maximum number of items to return. Min value is 1. Max value is 1000. Default value is 100|
|page_number|query|integer(int32)|false|The requested page number, 0-indexed. Default value is 0|
|value|query|string|false|Allows filtering by `value`|
|path|query|string|false|Allows filtering by `path`|
|sort_by|query|string|false|Allows ordering by `path`, `id`, `value`, `label`, `value_update_time`, `creation_time`, `device_id`|
|sorting_direction|query|string|false|The default is `asc`|
|has_history|query|boolean|false|Allows filtering by `has_history` field|
|metric|query|string|false|Allows filtering by `metric`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_by|path|
|sort_by|id|
|sort_by|value|
|sort_by|label|
|sort_by|value_update_time|
|sort_by|creation_time|
|sort_by|device_id|
|sorting_direction|asc|
|sorting_direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "creation_time": "2019-08-24T14:15:22Z",
    "device_id": 0,
    "has_history": true,
    "id": 0,
    "label": "string",
    "metric": "string",
    "path": "string",
    "previous_value": "string",
    "unit": "string",
    "value": "string",
    "value_update_time": "2019-08-24T14:15:22Z"
  }
]
```

<h3 id="listagentdevicevariables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of all device variables of an agent|Inline|

<h3 id="listagentdevicevariables-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[AgentDeviceVariable](#schemaagentdevicevariable)]|false|[The representation of a device variable]|
|» creation_time|string(date-time)|false|The creation time of the variable|
|» device_id|integer(int32)|true|The ID of the device|
|» has_history|boolean|true|If true the history of the variable can be retrieved with <a href='#getvariablehistory'> getVariableHistory</a>|
|» id|integer(int32)|true|The ID of the variable|
|» label|string|false|The label|
|» metric|string|false|The metric|
|» path|string|true|The variable path|
|» previous_value|string|false|The previous value of the variable|
|» unit|string|false|The unit of measurement|
|» value|string|false|The variable value|
|» value_update_time|string(date-time)|false|The update time of the variable value|

## countAgentDeviceVariables

<a id="opIdcountAgentDeviceVariables"></a>

> Code samples

```shell
curl -X HEAD {baseURL}/public-api/v1/agent/{agent_id}/device/variable \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/variable',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/variable',
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

r = requests.head('{baseURL}/public-api/v1/agent/{agent_id}/device/variable', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.head '{baseURL}/public-api/v1/agent/{agent_id}/device/variable',
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
    req, err := http.NewRequest("HEAD", "{baseURL}/public-api/v1/agent/{agent_id}/device/variable", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`HEAD /agent/{agent_id}/device/variable`</span>

Returns the device variables count of the agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X HEAD</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/variable \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="countagentdevicevariables-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|value|query|string|false|Allows filtering by `value`|
|path|query|string|false|Allows filtering by `path`|
|has_history|query|boolean|false|Allows filtering by `has_history` field|
|metric|query|string|false|Allows filtering by `metric`|

<h3 id="countagentdevicevariables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|The device variables count|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-Entities-Count|integer|int32|The device variables count|

## listDeviceVariables

<a id="opIdlistDeviceVariables"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/variable`</span>

Retrieves the list of device variables

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listdevicevariables-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|page_size|query|integer(int32)|false|The maximum number of items to return. Min value is 1. Max value is 1000. Default value is 100|
|page_number|query|integer(int32)|false|The requested page number, 0-indexed. Default value is 0|
|value|query|string|false|Allows filtering by `value`|
|path|query|string|false|Allows filtering by `path`|
|sort_by|query|string|false|Allows ordering by `path`, `id`, `value`, `label`, `value_update_time`, `creation_time`|
|sorting_direction|query|string|false|The default is `asc`|
|has_history|query|boolean|false|Allows filtering by `has_history` field|
|metric|query|string|false|Allows filtering by `metric`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_by|path|
|sort_by|id|
|sort_by|value|
|sort_by|label|
|sort_by|value_update_time|
|sort_by|creation_time|
|sorting_direction|asc|
|sorting_direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "creation_time": "2019-08-24T14:15:22Z",
    "has_history": true,
    "id": 0,
    "label": "string",
    "metric": "string",
    "path": "string",
    "previous_value": "string",
    "unit": "string",
    "value": "string",
    "value_update_time": "2019-08-24T14:15:22Z"
  }
]
```

<h3 id="listdevicevariables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of device variables|Inline|

<h3 id="listdevicevariables-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[DeviceVariable](#schemadevicevariable)]|false|[The representation of a device variable]|
|» creation_time|string(date-time)|false|The creation time of the variable|
|» has_history|boolean|true|If true the history of the variable can be retrieved with <a href='#getvariablehistory'> getVariableHistory</a>|
|» id|integer(int32)|true|The ID of the variable|
|» label|string|false|The label|
|» metric|string|false|The metric|
|» path|string|true|The variable path|
|» previous_value|string|false|The previous value of the variable|
|» unit|string|false|The unit of measurement|
|» value|string|false|The variable value|
|» value_update_time|string(date-time)|false|The update time of the variable value|

## countDeviceVariables

<a id="opIdcountDeviceVariables"></a>

> Code samples

```shell
curl -X HEAD {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable',
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

r = requests.head('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.head '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable',
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
    req, err := http.NewRequest("HEAD", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`HEAD /agent/{agent_id}/device/{device_id}/variable`</span>

Returns device variables count

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X HEAD</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="countdevicevariables-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|value|query|string|false|Allows filtering by `value`|
|path|query|string|false|Allows filtering by `path`|
|has_history|query|boolean|false|Allows filtering by `has_history` field|
|metric|query|string|false|Allows filtering by `metric`|

<h3 id="countdevicevariables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|The device variables count|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-Entities-Count|integer|int32|The device variables count|

## getVariableHistory

<a id="opIdgetVariableHistory"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable/{variable_id}/history \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable/{variable_id}/history',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable/{variable_id}/history',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable/{variable_id}/history', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable/{variable_id}/history',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable/{variable_id}/history", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/variable/{variable_id}/history`</span>

Returns the variable history

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/variable/{variable_id}/history \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getvariablehistory-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|variable_id|path|integer(int32)|true|Variable ID|
|from|query|string(date-time)|false|The start time of the time series. Default value is one week|
|to|query|string(date-time)|false|The end time of the time series. Default value is now|

> Example responses

> 200 Response

```json
[
  {
    "timestamp": "2019-08-24T14:15:22Z",
    "value": "string"
  }
]
```

<h3 id="getvariablehistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The variable's history, a list of dictionaries, each composed by the timestamp (a datetime) and the value (a string)|Inline|

<h3 id="getvariablehistory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[VariableHistorySample](#schemavariablehistorysample)]|false|none|
|» timestamp|string(date-time)|true|The time the sample was reported to Domotz|
|» value|string|true|The sample value|

## listAgentVariables

<a id="opIdlistAgentVariables"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/variable \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/variable',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/variable',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/variable', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/variable',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/variable", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/variable`</span>

Retrieves the list of all agent variables of the agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/variable \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listagentvariables-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|page_size|query|integer(int32)|false|The maximum number of items to return. Min value is 1. Max value is 1000. Default value is 100|
|page_number|query|integer(int32)|false|The requested page number, 0-indexed. Default value is 0|
|value|query|string|false|Allows filtering by `value`|
|path|query|string|false|Allows filtering by `path`|
|sort_by|query|string|false|Allows ordering by `path`, `id`, `value`, `label`, `value_update_time`, `creation_time`|
|sorting_direction|query|string|false|The default is `asc`|
|has_history|query|boolean|false|Allows filtering by `has_history` field|
|metric|query|string|false|Allows filtering by `metric`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_by|path|
|sort_by|id|
|sort_by|value|
|sort_by|label|
|sort_by|value_update_time|
|sort_by|creation_time|
|sorting_direction|asc|
|sorting_direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "creation_time": "2019-08-24T14:15:22Z",
    "has_history": true,
    "id": 0,
    "label": "string",
    "metric": "string",
    "path": "string",
    "previous_value": "string",
    "unit": "string",
    "value": "string",
    "value_update_time": "2019-08-24T14:15:22Z"
  }
]
```

<h3 id="listagentvariables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of all agent variables of the agent|Inline|

<h3 id="listagentvariables-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[AgentVariable](#schemaagentvariable)]|false|[The representation of an agent variable]|
|» creation_time|string(date-time)|false|The creation time of the variable|
|» has_history|boolean|true|If true the history of the variable can be retrieved with <a href='#getvariablehistory'> getVariableHistory</a>|
|» id|integer(int32)|true|The ID of the variable|
|» label|string|false|The label|
|» metric|string|false|The metric|
|» path|string|true|The variable path|
|» previous_value|string|false|The previous value of the variable|
|» unit|string|false|The unit of measurement|
|» value|string|false|The variable value|
|» value_update_time|string(date-time)|false|The update time of the variable value|

## countAgentVariables

<a id="opIdcountAgentVariables"></a>

> Code samples

```shell
curl -X HEAD {baseURL}/public-api/v1/agent/{agent_id}/variable \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/variable',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/variable',
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

r = requests.head('{baseURL}/public-api/v1/agent/{agent_id}/variable', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.head '{baseURL}/public-api/v1/agent/{agent_id}/variable',
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
    req, err := http.NewRequest("HEAD", "{baseURL}/public-api/v1/agent/{agent_id}/variable", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`HEAD /agent/{agent_id}/variable`</span>

Returns the agent variables count of the agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X HEAD</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/variable \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="countagentvariables-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|value|query|string|false|Allows filtering by `value`|
|path|query|string|false|Allows filtering by `path`|
|has_history|query|boolean|false|Allows filtering by `has_history` field|
|metric|query|string|false|Allows filtering by `metric`|

<h3 id="countagentvariables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|The agent variables count|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-Entities-Count|integer|int32|The agent variables count|

## getAgentVariableHistory

<a id="opIdgetAgentVariableHistory"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/variable/{variable_id}/history \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/variable/{variable_id}/history',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/variable/{variable_id}/history',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/variable/{variable_id}/history', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/variable/{variable_id}/history',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/variable/{variable_id}/history", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/variable/{variable_id}/history`</span>

Returns the agent variable history

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/variable/{variable_id}/history \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagentvariablehistory-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|variable_id|path|integer(int32)|true|Variable ID|
|from|query|string(date-time)|false|The start time of the time series. Default value is one week|
|to|query|string(date-time)|false|The end time of the time series. Default value is now|

> Example responses

> 200 Response

```json
[
  {
    "timestamp": "2019-08-24T14:15:22Z",
    "value": "string"
  }
]
```

<h3 id="getagentvariablehistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The agent variable's history, a list of dictionaries, each composed by the timestamp (a datetime) and the value (a string)|Inline|

<h3 id="getagentvariablehistory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[VariableHistorySample](#schemavariablehistorysample)]|false|none|
|» timestamp|string(date-time)|true|The time the sample was reported to Domotz|
|» value|string|true|The sample value|

<h1 id="domotz-public-api-inventory">inventory</h1>

## getDeviceInventory

<a id="opIdgetDeviceInventory"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/device/{device_id}/inventory`</span>

Returns the device's inventory data

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getdeviceinventory-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|

> Example responses

> 200 Response

```json
[
  {
    "creation_time": "2019-08-24T14:15:22Z",
    "key": "string",
    "value": "string"
  }
]
```

<h3 id="getdeviceinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The device's inventory, with the fields sorted alphabetically. Not set fields will be null|Inline|

<h3 id="getdeviceinventory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[DeviceInventoryField](#schemadeviceinventoryfield)]|false|[A device inventory field]|
|» creation_time|string(date-time)|false|none|
|» key|string|true|The name of the field, unique in the Inventory|
|» value|string|true|none|

## deleteDeviceInventoryField

<a id="opIddeleteDeviceInventoryField"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field}',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field}',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/device/{device_id}/inventory/{inventory_field}`</span>

Deletes the Inventory field for the device

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deletedeviceinventoryfield-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|inventory_field|path|string|true|Field identifier, unique within the Inventory|

<h3 id="deletedeviceinventoryfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## setDeviceInventoryFieldValue

<a id="opIdsetDeviceInventoryFieldValue"></a>

> Code samples

```shell
curl -X PUT {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field}',
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

r = requests.put('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field}', params={

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

result = RestClient.put '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field}',
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
    req, err := http.NewRequest("PUT", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /agent/{agent_id}/device/{device_id}/inventory/{inventory_field}`</span>

Sets the value of an Inventory field for the device, a value can't be set to `null`

> Body parameter

```json
"string"
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/inventory/{inventory_field} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="setdeviceinventoryfieldvalue-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|inventory_field|path|string|true|Field identifier, unique within the Inventory|
|body|body|string|true|none|

<h3 id="setdeviceinventoryfieldvalue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## deleteInventory

<a id="opIddeleteInventory"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/inventory \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/inventory',
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

fetch('{baseURL}/public-api/v1/inventory',
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

r = requests.delete('{baseURL}/public-api/v1/inventory', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/inventory',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/inventory", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /inventory`</span>

Clears the inventory

<h3 id="deleteinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## getInventory

<a id="opIdgetInventory"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/inventory \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/inventory',
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

fetch('{baseURL}/public-api/v1/inventory',
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

r = requests.get('{baseURL}/public-api/v1/inventory', params={

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

result = RestClient.get '{baseURL}/public-api/v1/inventory',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/inventory", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /inventory`</span>

Enumerates all the Inventory fields

> Example responses

> 200 Response

```json
[
  {
    "label": "string",
    "creation_time": "2019-08-24T14:15:22Z",
    "defined_by_user": 0,
    "key": "string"
  }
]
```

<h3 id="getinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The inventory fields, sorted by creation time|Inline|

<h3 id="getinventory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[allOf]|false|none|

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|---|
|» *anonymous*|[WriteInventoryField](#schemawriteinventoryfield)|false|DTO Used for creating/updating Inventory fields|
|»» label|string|true|A detailed description of the field, for documentation|

*and*

|Name|Type|Required|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|DTO Returned by the API describing an Inventory Field|
|»» creation_time|string(date-time)|false|none|
|»» defined_by_user|integer(int32)|false|The `id` of the user that defined the inventory field - if different from your id, this field can't be deleted or changed|
|»» key|string|true|The name of the field, unique in the Inventory|

## deleteInventoryField

<a id="opIddeleteInventoryField"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/inventory/{inventory_field} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/inventory/{inventory_field}',
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

fetch('{baseURL}/public-api/v1/inventory/{inventory_field}',
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

r = requests.delete('{baseURL}/public-api/v1/inventory/{inventory_field}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/inventory/{inventory_field}',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/inventory/{inventory_field}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /inventory/{inventory_field}`</span>

Deletes the Inventory Field

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/inventory/{inventory_field} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deleteinventoryfield-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|inventory_field|path|string|true|Field identifier, unique within the Inventory|

<h3 id="deleteinventoryfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## createInventoryField

<a id="opIdcreateInventoryField"></a>

> Code samples

```shell
curl -X POST {baseURL}/public-api/v1/inventory/{inventory_field} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/inventory/{inventory_field}',
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
  "label": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/inventory/{inventory_field}',
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

r = requests.post('{baseURL}/public-api/v1/inventory/{inventory_field}', params={

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

result = RestClient.post '{baseURL}/public-api/v1/inventory/{inventory_field}',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/inventory/{inventory_field}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /inventory/{inventory_field}`</span>

Creates a new Inventory Field - the user will be able to set key-values pairs on every device

> Body parameter

```json
{
  "label": "string"
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/inventory/{inventory_field} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="createinventoryfield-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|inventory_field|path|string|true|Field identifier, unique within the Inventory|
|body|body|[WriteInventoryField](#schemawriteinventoryfield)|true|none|

<h3 id="createinventoryfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|The inventory field will be referenced to with its name|None|

## updateInventoryField

<a id="opIdupdateInventoryField"></a>

> Code samples

```shell
curl -X PUT {baseURL}/public-api/v1/inventory/{inventory_field} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/inventory/{inventory_field}',
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
  "label": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/inventory/{inventory_field}',
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

r = requests.put('{baseURL}/public-api/v1/inventory/{inventory_field}', params={

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

result = RestClient.put '{baseURL}/public-api/v1/inventory/{inventory_field}',
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
    req, err := http.NewRequest("PUT", "{baseURL}/public-api/v1/inventory/{inventory_field}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /inventory/{inventory_field}`</span>

Updates the Inventory Field

> Body parameter

```json
{
  "label": "string"
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">{baseURL}/public-api/v1/inventory/{inventory_field} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="updateinventoryfield-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|inventory_field|path|string|true|Field identifier, unique within the Inventory|
|body|body|[WriteInventoryField](#schemawriteinventoryfield)|true|none|

<h3 id="updateinventoryfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

<h1 id="domotz-public-api-multimedia">multimedia</h1>

## onvifSnapshot

<a id="opIdonvifSnapshot"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot \
  -H 'Accept: image/*' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'image/*',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/device/{device_id}/multimedia/camera/snapshot \
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

<h1 id="domotz-public-api-networking">networking</h1>

## getAgentIPConflicts

<a id="opIdgetAgentIPConflicts"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/ip-conflict \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/ip-conflict',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/ip-conflict',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/ip-conflict', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/ip-conflict',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/ip-conflict", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/ip-conflict`</span>

Returns the list of active IP conflicts on an agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/ip-conflict \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagentipconflicts-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
[
  {
    "conflicting_devices": [
      {
        "id": 0,
        "mac": "string"
      }
    ],
    "ip": "string"
  }
]
```

<h3 id="getagentipconflicts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<h3 id="getagentipconflicts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[AgentIpConflict](#schemaagentipconflict)]|false|none|
|» conflicting_devices|[object]|false|none|
|»» id|integer(int32)|false|none|
|»» mac|string|false|none|
|» ip|string|false|none|

## setDHCPDeviceDiscovery

<a id="opIdsetDHCPDeviceDiscovery"></a>

> Code samples

```shell
curl -X PUT {baseURL}/public-api/v1/agent/{agent_id}/network/dhcp-device-discovery \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/network/dhcp-device-discovery',
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
  "dhcp_device_discovery": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/agent/{agent_id}/network/dhcp-device-discovery',
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

r = requests.put('{baseURL}/public-api/v1/agent/{agent_id}/network/dhcp-device-discovery', params={

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

result = RestClient.put '{baseURL}/public-api/v1/agent/{agent_id}/network/dhcp-device-discovery',
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
    req, err := http.NewRequest("PUT", "{baseURL}/public-api/v1/agent/{agent_id}/network/dhcp-device-discovery", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /agent/{agent_id}/network/dhcp-device-discovery`</span>

Enable/disable the Agent DHCP Device Discovery

> Body parameter

```json
{
  "dhcp_device_discovery": true
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/network/dhcp-device-discovery \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="setdhcpdevicediscovery-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|body|body|[DHCPDeviceDiscoverySetting](#schemadhcpdevicediscoverysetting)|true|Enable/disable the DHCP Device Discovery on the agent|

<h3 id="setdhcpdevicediscovery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## deleteAgentExternalHostScanPolicy

<a id="opIddeleteAgentExternalHostScanPolicy"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/network/external-host-scan-policy`</span>

Restore the external host scan policy to default.

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deleteagentexternalhostscanpolicy-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

<h3 id="deleteagentexternalhostscanpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## getAgentExternalHostScanPolicy

<a id="opIdgetAgentExternalHostScanPolicy"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/network/external-host-scan-policy`</span>

Returns the current external host scan policy.

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagentexternalhostscanpolicy-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
{
  "icmp": {
    "enabled": true
  },
  "tcp_ack": {
    "enabled": true,
    "ports": [
      0
    ]
  },
  "tcp_syn": {
    "enabled": true,
    "ports": [
      0
    ]
  }
}
```

<h3 id="getagentexternalhostscanpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The external host scan policy.|[AgentExternalHostScanPolicy](#schemaagentexternalhostscanpolicy)|

## setAgentExternalHostScanPolicy

<a id="opIdsetAgentExternalHostScanPolicy"></a>

> Code samples

```shell
curl -X PUT {baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy',
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
  "icmp": {
    "enabled": true
  },
  "tcp_ack": {
    "enabled": true,
    "ports": [
      0
    ]
  },
  "tcp_syn": {
    "enabled": true,
    "ports": [
      0
    ]
  }
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy',
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

r = requests.put('{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy', params={

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

result = RestClient.put '{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy',
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
    req, err := http.NewRequest("PUT", "{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /agent/{agent_id}/network/external-host-scan-policy`</span>

Updates the current external host scan policy. It is possible to enable/disable each one of the three available methods (ICMP, TCP-SYN, TCP-ACK). For TCP-SYN and TCP-ACK is mandatory to specify a set of TCP ports. If a method is not specified in the payload of the request, it will be configured as disabled

> Body parameter

```json
{
  "icmp": {
    "enabled": true
  },
  "tcp_ack": {
    "enabled": true,
    "ports": [
      0
    ]
  },
  "tcp_syn": {
    "enabled": true,
    "ports": [
      0
    ]
  }
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/network/external-host-scan-policy \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="setagentexternalhostscanpolicy-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|body|body|[AgentExternalHostScanPolicy](#schemaagentexternalhostscanpolicy)|true|The external host scan policy to be applied|

<h3 id="setagentexternalhostscanpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## getAgentInterfaces

<a id="opIdgetAgentInterfaces"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/network/interfaces \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/network/interfaces`</span>

Returns the networks monitored by the agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagentinterfaces-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
{
  "attached": [
    {
      "address": "string",
      "mac_address": "string",
      "name": "string",
      "netmask": 0
    }
  ],
  "routed": [
    {
      "address": "string",
      "name": "string",
      "netmask": 0
    }
  ]
}
```

<h3 id="getagentinterfaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The networks monitored by the agent|[AllAgentInterfaces](#schemaallagentinterfaces)|

## deleteAgentInterfacesPolicy

<a id="opIddeleteAgentInterfacesPolicy"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/network/interfaces-policy`</span>

Resets the network interface filtering policy to the default value

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deleteagentinterfacespolicy-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

<h3 id="deleteagentinterfacespolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## getAgentInterfacesPolicy

<a id="opIdgetAgentInterfacesPolicy"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/network/interfaces-policy`</span>

Returns the current network interface filtering policy. The interfaces policy defines the set of interfaces which will be ignored (`deny`) or scanned (`allow`) by the agent. The default behavior is to scan all available interfaces

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagentinterfacespolicy-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
{
  "policy": "allow",
  "rules": [
    "string"
  ]
}
```

<h3 id="getagentinterfacespolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The current network interface filtering policy|[AgentInterfacesPolicy](#schemaagentinterfacespolicy)|

## setAgentInterfacesPolicy

<a id="opIdsetAgentInterfacesPolicy"></a>

> Code samples

```shell
curl -X PUT {baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy',
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
  "policy": "allow",
  "rules": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy',
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

r = requests.put('{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy', params={

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

result = RestClient.put '{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy',
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
    req, err := http.NewRequest("PUT", "{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /agent/{agent_id}/network/interfaces-policy`</span>

Updates the current network interface filtering policy

> Body parameter

```json
{
  "policy": "allow",
  "rules": [
    "string"
  ]
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/network/interfaces-policy \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="setagentinterfacespolicy-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|body|body|[AgentInterfacesPolicy](#schemaagentinterfacespolicy)|true|the filtering policy to be applied|

<h3 id="setagentinterfacespolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## deleteAgentIPScanPolicy

<a id="opIddeleteAgentIPScanPolicy"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy',
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

r = requests.delete('{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /agent/{agent_id}/network/ip-scan-policy`</span>

Resets the IP scan policy to the default value

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deleteagentipscanpolicy-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

<h3 id="deleteagentipscanpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## getAgentIPScanPolicy

<a id="opIdgetAgentIPScanPolicy"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/network/ip-scan-policy`</span>

Returns the current IP addresses management policy. It is possible to specify a set of IP addresses in the `forced_ip_addresses` field array or a set of IP address ranges in the `forced_ip_ranges` field array to be always scanned.

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getagentipscanpolicy-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
{
  "forced_ip_addresses": [
    "string"
  ],
  "forced_ip_ranges": [
    {
      "end": "string",
      "start": "string"
    }
  ]
}
```

<h3 id="getagentipscanpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The IP scan policy.|[AgentIPScanPolicy](#schemaagentipscanpolicy)|

## setAgentIPScanPolicy

<a id="opIdsetAgentIPScanPolicy"></a>

> Code samples

```shell
curl -X PUT {baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy',
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
  "forced_ip_addresses": [
    "string"
  ],
  "forced_ip_ranges": [
    {
      "end": "string",
      "start": "string"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy',
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

r = requests.put('{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy', params={

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

result = RestClient.put '{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy',
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
    req, err := http.NewRequest("PUT", "{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /agent/{agent_id}/network/ip-scan-policy`</span>

Updates the current IP address scan policy. The list of IP addresses provided in `forced_ip_addresses` and the list of IP address ranges provided in `forced_ip_ranges` will be scanned regardless of the automatic discovery settings of the agent.

> Body parameter

```json
{
  "forced_ip_addresses": [
    "string"
  ],
  "forced_ip_ranges": [
    {
      "end": "string",
      "start": "string"
    }
  ]
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/network/ip-scan-policy \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="setagentipscanpolicy-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|body|body|[AgentIPScanPolicy](#schemaagentipscanpolicy)|true|the IP scan policy to be applied|

<h3 id="setagentipscanpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## createRoutedNetwork

<a id="opIdcreateRoutedNetwork"></a>

> Code samples

```shell
curl -X POST {baseURL}/public-api/v1/agent/{agent_id}/network/routed \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/network/routed',
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
  "address": "string",
  "name": "string",
  "netmask": 0
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/agent/{agent_id}/network/routed',
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

r = requests.post('{baseURL}/public-api/v1/agent/{agent_id}/network/routed', params={

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

result = RestClient.post '{baseURL}/public-api/v1/agent/{agent_id}/network/routed',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/agent/{agent_id}/network/routed", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /agent/{agent_id}/network/routed`</span>

Creates a routed network

> Body parameter

```json
{
  "address": "string",
  "name": "string",
  "netmask": 0
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/network/routed \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="createroutednetwork-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|
|body|body|[RoutedNetwork](#schemaroutednetwork)|true|none|

<h3 id="createroutednetwork-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<h1 id="domotz-public-api-topology">topology</h1>

## getNetworkTopology

<a id="opIdgetNetworkTopology"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/agent/{agent_id}/network-topology \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/network-topology',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/network-topology',
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

r = requests.get('{baseURL}/public-api/v1/agent/{agent_id}/network-topology', params={

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

result = RestClient.get '{baseURL}/public-api/v1/agent/{agent_id}/network-topology',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/agent/{agent_id}/network-topology", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /agent/{agent_id}/network-topology`</span>

Returns the agent's network topology

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/network-topology \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getnetworktopology-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
{
  "edges": [
    {
      "from": 0,
      "to": 0
    }
  ]
}
```

<h3 id="getnetworktopology-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[NetworkTopology](#schemanetworktopology)|

<h1 id="domotz-public-api-company">company</h1>

## moveAgent

<a id="opIdmoveAgent"></a>

> Code samples

```shell
curl -X PUT {baseURL}/public-api/v1/agent/{agent_id}/ownership/team/{team_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/agent/{agent_id}/ownership/team/{team_id}',
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

fetch('{baseURL}/public-api/v1/agent/{agent_id}/ownership/team/{team_id}',
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

r = requests.put('{baseURL}/public-api/v1/agent/{agent_id}/ownership/team/{team_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.put '{baseURL}/public-api/v1/agent/{agent_id}/ownership/team/{team_id}',
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
    req, err := http.NewRequest("PUT", "{baseURL}/public-api/v1/agent/{agent_id}/ownership/team/{team_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /agent/{agent_id}/ownership/team/{team_id}`</span>

Moves an agent under the control of a different team. Note: This API is restricted to users on the Enterprise Plan. Please contact <a href="mailto:sales@domotz.com">sales@domotz.com</a> to learn more.

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">{baseURL}/public-api/v1/agent/{agent_id}/ownership/team/{team_id} \
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
curl -X GET {baseURL}/public-api/v1/area \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/area',
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

fetch('{baseURL}/public-api/v1/area',
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

r = requests.get('{baseURL}/public-api/v1/area', params={

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

result = RestClient.get '{baseURL}/public-api/v1/area',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/area", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /area`</span>

Returns all the areas of a Company. Note: This API is restricted to users on the Enterprise Plan. Please contact <a href="mailto:sales@domotz.com">sales@domotz.com</a> to learn more.

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
curl -X GET {baseURL}/public-api/v1/area/{area_id}/team \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/area/{area_id}/team',
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

fetch('{baseURL}/public-api/v1/area/{area_id}/team',
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

r = requests.get('{baseURL}/public-api/v1/area/{area_id}/team', params={

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

result = RestClient.get '{baseURL}/public-api/v1/area/{area_id}/team',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/area/{area_id}/team", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /area/{area_id}/team`</span>

Returns all the teams of an Area. Note: This API is restricted to users on the Enterprise Plan. Please contact <a href="mailto:sales@domotz.com">sales@domotz.com</a> to learn more.

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/area/{area_id}/team \
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
curl -X POST {baseURL}/public-api/v1/area/{area_id}/team \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/area/{area_id}/team',
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

fetch('{baseURL}/public-api/v1/area/{area_id}/team',
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

r = requests.post('{baseURL}/public-api/v1/area/{area_id}/team', params={

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

result = RestClient.post '{baseURL}/public-api/v1/area/{area_id}/team',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/area/{area_id}/team", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /area/{area_id}/team`</span>

Creates a new Team. Note: This API is restricted to users on the Enterprise Plan. Please contact <a href="mailto:sales@domotz.com">sales@domotz.com</a> to learn more.

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
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/area/{area_id}/team \
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

## getAlertProfiles2

<a id="opIdgetAlertProfiles2"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/alert-profile \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/alert-profile',
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

fetch('{baseURL}/public-api/v1/alert-profile',
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

r = requests.get('{baseURL}/public-api/v1/alert-profile', params={

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

result = RestClient.get '{baseURL}/public-api/v1/alert-profile',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/alert-profile", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /alert-profile`</span>

Returns the list of configured alert profiles. You can configure alert profiles on the Domotz Portal. Alert profiles define the association between a list of events and a notification channel (email, webhook or slack)

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "events": [
      "device_status_up"
    ],
    "id": 0,
    "is_enabled": true,
    "name": "string",
    "tag": "string"
  }
]
```

<h3 id="getalertprofiles2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of configured alert profiles|Inline|

<h3 id="getalertprofiles2-responseschema">Response Schema</h3>

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

## getAgentAlertProfile

<a id="opIdgetAgentAlertProfile"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id} \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id}',
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

fetch('{baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id}',
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

r = requests.get('{baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id}', params={

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

result = RestClient.get '{baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id}',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id}", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id} \
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
curl -X GET {baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id}/device \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id}/device',
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

fetch('{baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id}/device',
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

r = requests.get('{baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id}/device', params={

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

result = RestClient.get '{baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id}/device',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id}/device", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/alert-profile/binding/agent/{agent_id}/device \
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
curl -X DELETE {baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}',
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

fetch('{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}',
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

r = requests.delete('{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}", data)
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
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id} \
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
curl -X POST {baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}',
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

fetch('{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}',
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

r = requests.post('{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post '{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}", data)
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
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id} \
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
<td>agent_feature_discovery</td>
<td>POST</td>
<td><a href="#tocSfeaturediscoveryevent" data-title="FeatureDiscoveryEvent">FeatureDiscoveryEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>agent_feature_discovery_mib</td>
<td>POST</td>
<td><a href="#tocSmibdiscoveryevent" data-title="MibDiscoveryEvent">MibDiscoveryEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>agent_lan_change</td>
<td>POST</td>
<td><a href="#tocSagentlanchangeevent" data-title="AgentLANChangeEvent">AgentLANChangeEvent</a></td>
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
<td>agent_status_down</td>
<td>POST</td>
<td><a href="#tocSagentstatusevent" data-title="AgentStatusEvent">AgentStatusEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>agent_status_up</td>
<td>POST</td>
<td><a href="#tocSagentstatusevent" data-title="AgentStatusEvent">AgentStatusEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>agent_wan_change</td>
<td>POST</td>
<td><a href="#tocSagentwanchangeevent" data-title="AgentWANChangeEvent">AgentWANChangeEvent</a></td>
<td>201</td>
</tr>

</tbody>
</table>

</div>

## unbindAlertProfileFromDevice

<a id="opIdunbindAlertProfileFromDevice"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}',
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

fetch('{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}',
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

r = requests.delete('{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}", data)
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
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id} \
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
curl -X POST {baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}',
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

fetch('{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}',
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

r = requests.post('{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post '{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id}", data)
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
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/alert-profile/{alert_profile_id}/binding/agent/{agent_id}/device/{device_id} \
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
<td>device_status_down</td>
<td>POST</td>
<td><a href="#tocSdevicestatuschangeevent" data-title="DeviceStatusChangeEvent">DeviceStatusChangeEvent</a></td>
<td>201</td>
</tr>

<tr>
<td>device_status_up</td>
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

<tr>
<td>monitoring_profile_state_changed</td>
<td>POST</td>
<td><a href="#tocSmonitoringprofilestatechanged" data-title="MonitoringProfileStateChanged">MonitoringProfileStateChanged</a></td>
<td>201</td>
</tr>

</tbody>
</table>

</div>

## getAlertProfiles _Deprecated_ (please use getAlertProfiles2)

<a id="opIdgetAlertProfiles _Deprecated_ (please use getAlertProfiles2)"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/user/{user_id}/alert-profile \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/user/{user_id}/alert-profile',
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

fetch('{baseURL}/public-api/v1/user/{user_id}/alert-profile',
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

r = requests.get('{baseURL}/public-api/v1/user/{user_id}/alert-profile', params={

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

result = RestClient.get '{baseURL}/public-api/v1/user/{user_id}/alert-profile',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/user/{user_id}/alert-profile", data)
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
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/user/{user_id}/alert-profile \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getalertprofiles-_deprecated_-(please-use-getalertprofiles2)-parameters">Parameters</h3>

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
      "device_status_up"
    ],
    "id": 0,
    "is_enabled": true,
    "name": "string",
    "tag": "string"
  }
]
```

<h3 id="getalertprofiles-_deprecated_-(please-use-getalertprofiles2)-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of configured alert profiles|Inline|

<h3 id="getalertprofiles-_deprecated_-(please-use-getalertprofiles2)-responseschema">Response Schema</h3>

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

<h1 id="domotz-public-api-custom-drivers">Custom Drivers</h1>

## listCustomDrivers

<a id="opIdlistCustomDrivers"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/custom-driver \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/custom-driver',
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

fetch('{baseURL}/public-api/v1/custom-driver',
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

r = requests.get('{baseURL}/public-api/v1/custom-driver', params={

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

result = RestClient.get '{baseURL}/public-api/v1/custom-driver',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/custom-driver", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /custom-driver`</span>

Retrieves the list of available Custom Drivers

> Example responses

> 200 Response

```json
[
  {
    "code_inspection": {
      "data_saving_functions": [
        "string"
      ],
      "has_independent_variables": true,
      "has_parameters": true,
      "has_table": true
    },
    "description": "string",
    "device_ids": [
      0
    ],
    "id": 0,
    "is_valid": true,
    "minimal_sample_period": 0,
    "name": "string",
    "requires_credentials": true,
    "type": "GENERIC"
  }
]
```

<h3 id="listcustomdrivers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of available Custom Drivers|Inline|

<h3 id="listcustomdrivers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomDriver](#schemacustomdriver)]|false|[A Custom Driver that can be applied on devices]|
|» code_inspection|object|true|Result of the Custom Driver code analysis|
|»» data_saving_functions|[string]|true|A list of functions of the {CUSTOM_DRIVER} that save data. Only a one of these can be executed on the same device at a time.|
|»» has_independent_variables|boolean|true|True if the Custom Driver creates independent variables on execution|
|»» has_parameters|boolean|true|True if the Custom Driver uses parameters during execution|
|»» has_table|boolean|true|True if the Custom Driver creates a variable table on execution|
|» description|string|false|Description of the Custom Driver|
|» device_ids|[integer]|true|List of the device IDs the Custom Driver is applied on|
|» id|integer(int32)|true|The identifier of the Custom Driver|
|» is_valid|boolean|true|True if the Custom Driver has valid code, False otherwise|
|» minimal_sample_period|integer(int32)|true|The minimal sampling interval of the Custom Driver (in seconds)|
|» name|string|true|Name of the Custom Driver|
|» requires_credentials|boolean|true|True if the Custom Driver requires credentials to run, False otherwise|
|» type|string|true|The Custom Driver type.  Driver usage differs between types such as data collection and/or available actions|

#### Enumerated Values

|Property|Value|
|---|---|
|type|GENERIC|
|type|CONFIGURATION_MANAGEMENT|

## listCustomDriverAssociations

<a id="opIdlistCustomDriverAssociations"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/custom-driver/agent/{agent_id}/association \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/custom-driver/agent/{agent_id}/association',
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

fetch('{baseURL}/public-api/v1/custom-driver/agent/{agent_id}/association',
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

r = requests.get('{baseURL}/public-api/v1/custom-driver/agent/{agent_id}/association', params={

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

result = RestClient.get '{baseURL}/public-api/v1/custom-driver/agent/{agent_id}/association',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/custom-driver/agent/{agent_id}/association", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /custom-driver/agent/{agent_id}/association`</span>

Retrieves a list of all Custom Driver associations for an agent

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/custom-driver/agent/{agent_id}/association \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="listcustomdriverassociations-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|agent_id|path|integer(int32)|true|Agent ID|

> Example responses

> 200 Response

```json
[
  {
    "custom_driver_id": 0,
    "device_id": 0,
    "id": 0,
    "last_inspection_time": "2019-08-24T14:15:22Z",
    "parameters": [
      {
        "custom_driver_parameter_id": 0,
        "description": "string",
        "name": "string",
        "value": null,
        "value_type": "STRING"
      }
    ],
    "sample_period": 0,
    "status": "ENABLED",
    "used_variables": 0
  }
]
```

<h3 id="listcustomdriverassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of Custom Driver associations|Inline|

<h3 id="listcustomdriverassociations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomDriverAssociation](#schemacustomdriverassociation)]|false|[An association between a Custom Driver and a device]|
|» custom_driver_id|integer(int32)|true|The id of the Custom Driver|
|» device_id|integer(int32)|true|The id of the device the Custom Driver is applied to|
|» id|integer(int32)|true|The id of the association|
|» last_inspection_time|string(date-time)|true|The last time (datetime) the device inspection was executed|
|» parameters|[object]|false|Parameters used in the association|
|»» custom_driver_parameter_id|integer(int32)|true|The id of the parameter on the driver level|
|»» description|string|false|Description of the parameter|
|»» name|string|true|The identifier by which the parameter is called in the driver script|
|»» value|any|false|Value of the parameter used for the association. In case it is not set on the association level, the Custom Driver default is shown. Empty if the parameter was added to the Custom Driver without a default value after the association was created|
|»» value_type|string|true|Value type of the parameter. Numbers are treated as floats, list items are treated as strings|
|» sample_period|integer(int32)|true|The sampling interval of the Custom Driver (in seconds)|
|» status|string|true|<ul><li> *ENABLED*: The association is enabled and running </li><li> *DISABLED*: The association is disabled due to failure </li></ul>|
|» used_variables|integer(int32)|true|The number of variables used by this Custom Driver association|

#### Enumerated Values

|Property|Value|
|---|---|
|value_type|STRING|
|value_type|NUMBER|
|value_type|LIST|
|status|ENABLED|
|status|DISABLED|

## reEnableCustomDriverAssociations

<a id="opIdreEnableCustomDriverAssociations"></a>

> Code samples

```shell
curl -X POST {baseURL}/public-api/v1/custom-driver/association/re-enable \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/custom-driver/association/re-enable',
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

fetch('{baseURL}/public-api/v1/custom-driver/association/re-enable',
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

r = requests.post('{baseURL}/public-api/v1/custom-driver/association/re-enable', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.post '{baseURL}/public-api/v1/custom-driver/association/re-enable',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/custom-driver/association/re-enable", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /custom-driver/association/re-enable`</span>

Re-enable all disabled Custom Drivers for the current user

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/custom-driver/association/re-enable \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="reenablecustomdriverassociations-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|include_unrecoverable|query|boolean|false|If true, will also re-enable associations that the system has determined unable to recover (e.g. due to missing credentials). Defaults to false.|

<h3 id="reenablecustomdriverassociations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## getCustomDriver

<a id="opIdgetCustomDriver"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/custom-driver/{custom_driver_id} \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/custom-driver/{custom_driver_id}',
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

fetch('{baseURL}/public-api/v1/custom-driver/{custom_driver_id}',
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

r = requests.get('{baseURL}/public-api/v1/custom-driver/{custom_driver_id}', params={

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

result = RestClient.get '{baseURL}/public-api/v1/custom-driver/{custom_driver_id}',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/custom-driver/{custom_driver_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`GET /custom-driver/{custom_driver_id}`</span>

Returns details of a Custom Driver

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X GET</span> <span class="dmt-url">{baseURL}/public-api/v1/custom-driver/{custom_driver_id} \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="getcustomdriver-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|custom_driver_id|path|integer(int32)|true|Custom Driver ID|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "documentation": "string",
      "id": 0,
      "label": "string",
      "line": 0
    }
  ],
  "code": "string",
  "code_inspection": {
    "data_saving_functions": [
      "string"
    ],
    "has_independent_variables": true,
    "has_parameters": true,
    "has_table": true
  },
  "description": "string",
  "errors": [
    {
      "line": 0,
      "message": "string",
      "type": "string"
    }
  ],
  "id": 0,
  "is_valid": true,
  "minimal_sample_period": 0,
  "name": "string",
  "parameters": [
    {
      "default_value": null,
      "description": "string",
      "id": 0,
      "name": "string",
      "value_type": "STRING"
    }
  ],
  "requires_credentials": true,
  "type": "GENERIC"
}
```

<h3 id="getcustomdriver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Custom Driver details|[CustomDriverDetails](#schemacustomdriverdetails)|

## createCustomDriverAssociation

<a id="opIdcreateCustomDriverAssociation"></a>

> Code samples

```shell
curl -X POST {baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/association \
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
  url: '{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/association',
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
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "parameters": [
    {
      "custom_driver_parameter_id": 0,
      "value": null
    }
  ],
  "sample_period": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/association',
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

r = requests.post('{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/association', params={

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

result = RestClient.post '{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/association',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/association", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/association`</span>

Apply a Custom Driver to a device

> Body parameter

```json
{
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "parameters": [
    {
      "custom_driver_parameter_id": 0,
      "value": null
    }
  ],
  "sample_period": 0
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/association \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="createcustomdriverassociation-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|custom_driver_id|path|integer(int32)|true|Custom Driver ID|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|body|body|[CustomDriverAssociationCreation](#schemacustomdriverassociationcreation)|false|none|

> Example responses

> 201 Response

```json
{
  "error": "string",
  "result": 0
}
```

<h3 id="createcustomdriverassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|The outcome of the association|[CustomDriverAssociationCreationResult](#schemacustomdriverassociationcreationresult)|

## executeCustomDriverAction

<a id="opIdexecuteCustomDriverAction"></a>

> Code samples

```shell
curl -X POST {baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/execute/{action_id} \
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
  url: '{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/execute/{action_id}',
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
  "test": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/execute/{action_id}',
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

r = requests.post('{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/execute/{action_id}', params={

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

result = RestClient.post '{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/execute/{action_id}',
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
    req, err := http.NewRequest("POST", "{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/execute/{action_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`POST /custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/execute/{action_id}`</span>

Execute a Custom Driver action on an associated device. The agent variables limit for Custom Drivers must not be exceeded.

> Body parameter

```json
{
  "test": true
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X POST</span> <span class="dmt-url">{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/agent/{agent_id}/device/{device_id}/execute/{action_id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="executecustomdriveraction-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|custom_driver_id|path|integer(int32)|true|Custom Driver ID|
|agent_id|path|integer(int32)|true|Agent ID|
|device_id|path|integer(int32)|true|Device ID|
|action_id|path|string|true|Custom Driver Action id. Valid range 1-30 or get-status|
|body|body|[CustomDriverExecutionOptions](#schemacustomdriverexecutionoptions)|false|none|

> Example responses

> 200 Response

```json
{
  "elapsed": 0,
  "errorMessage": "string",
  "errorType": "string",
  "log": [
    "string"
  ],
  "outcome": "undefined"
}
```

<h3 id="executecustomdriveraction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The outcome of the custom action execution|[CustomDriverExecutionResult](#schemacustomdriverexecutionresult)|

## deleteCustomDriverAssociation

<a id="opIddeleteCustomDriverAssociation"></a>

> Code samples

```shell
curl -X DELETE {baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id} \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id}',
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

fetch('{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id}',
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

r = requests.delete('{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id}', params={

}, headers = headers)

print r.json()

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'X-Api-Key' => 'API_KEY'
}

result = RestClient.delete '{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id}',
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
    req, err := http.NewRequest("DELETE", "{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`DELETE /custom-driver/{custom_driver_id}/association/{association_id}`</span>

Remove a Custom Driver from a device. This irreversibly deletes all variables created by the driver for that device

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X DELETE</span> <span class="dmt-url">{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id} \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="deletecustomdriverassociation-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|custom_driver_id|path|integer(int32)|true|Custom Driver ID|
|association_id|path|integer(int32)|true|Custom Driver Association ID|

<h3 id="deletecustomdriverassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

## updateCustomDriverAssociationParameters

<a id="opIdupdateCustomDriverAssociationParameters"></a>

> Code samples

```shell
curl -X PUT {baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id}',
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
  "parameters": [
    {
      "custom_driver_parameter_id": 0,
      "value": null
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'X-Api-Key':'API_KEY'

};

fetch('{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id}',
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

r = requests.put('{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id}', params={

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

result = RestClient.put '{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id}',
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
    req, err := http.NewRequest("PUT", "{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

<span class='dmt-method'>`PUT /custom-driver/{custom_driver_id}/association/{association_id}`</span>

Update the parameters for a Custom Driver association

> Body parameter

```json
{
  "parameters": [
    {
      "custom_driver_parameter_id": 0,
      "value": null
    }
  ]
}
```

<h3>Curl</h3>

<p class="dmt-code-block">
<code>
<span class="dmt-command">curl -X PUT</span> <span class="dmt-url">{baseURL}/public-api/v1/custom-driver/{custom_driver_id}/association/{association_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: API_KEY'

</span>
</code>
</p>

<h3 id="updatecustomdriverassociationparameters-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|custom_driver_id|path|integer(int32)|true|Custom Driver ID|
|association_id|path|integer(int32)|true|Custom Driver Association ID|
|body|body|[CustomDriverAssociationParameterCreation](#schemacustomdriverassociationparametercreation)|true|A list of parameters to update|

<h3 id="updatecustomdriverassociationparameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|None|

<h1 id="domotz-public-api-meta">meta</h1>

## apiUsageInfo

<a id="opIdapiUsageInfo"></a>

> Code samples

```shell
curl -X GET {baseURL}/public-api/v1/meta/usage \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/meta/usage',
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

fetch('{baseURL}/public-api/v1/meta/usage',
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

r = requests.get('{baseURL}/public-api/v1/meta/usage', params={

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

result = RestClient.get '{baseURL}/public-api/v1/meta/usage',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/meta/usage", data)
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
curl -X GET {baseURL}/public-api/v1/type/device/base \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/type/device/base',
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

fetch('{baseURL}/public-api/v1/type/device/base',
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

r = requests.get('{baseURL}/public-api/v1/type/device/base', params={

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

result = RestClient.get '{baseURL}/public-api/v1/type/device/base',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/type/device/base", data)
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
curl -X GET {baseURL}/public-api/v1/type/device/detected \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/type/device/detected',
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

fetch('{baseURL}/public-api/v1/type/device/detected',
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

r = requests.get('{baseURL}/public-api/v1/type/device/detected', params={

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

result = RestClient.get '{baseURL}/public-api/v1/type/device/detected',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/type/device/detected", data)
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
curl -X GET {baseURL}/public-api/v1/user \
  -H 'Accept: application/json' \
  -H 'X-Api-Key: API_KEY'

```

```javascript
var headers = {
  'Accept':'application/json',
  'X-Api-Key':'API_KEY'

};

$.ajax({
  url: '{baseURL}/public-api/v1/user',
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

fetch('{baseURL}/public-api/v1/user',
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

r = requests.get('{baseURL}/public-api/v1/user', params={

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

result = RestClient.get '{baseURL}/public-api/v1/user',
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
    req, err := http.NewRequest("GET", "{baseURL}/public-api/v1/user", data)
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
  "authentication_status": "NO_AUTHENTICATION",
  "details": {
    "firmware_version": "string",
    "notes": "string",
    "room": "string",
    "serial": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "os": {
    "build": "string",
    "name": "string",
    "version": "string"
  },
  "protocol": "IP",
  "snmp_status": "CHECKING",
  "type": {
    "detected_id": 0,
    "id": 0,
    "label": "string"
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
|» firmware_version|string|false|none|
|» notes|string|false|none|
|» room|string|false|none|
|» serial|string|false|Set to null to reset and allow the automatically discovered serial number to be used for device|
|» snmp_read_community|string|false|Deprecated. Please use <a href='#getsnmpauthentication'> getSNMPAuthentication </a>|
|» snmp_write_community|string|false|Deprecated. Please use <a href='#getsnmpauthentication'> getSNMPAuthentication </a>|
|» zone|string|false|none|
|display_name|string|true|none|
|first_seen_on|string(date-time)|false|none|
|id|integer(int32)|true|none|
|importance|string|false|none|
|main_id|integer(int32)|false|In a clustered configuration, the main device id|
|os|object|false|DeviceOS|
|» build|string|false|none|
|» name|string|false|none|
|» version|string|false|none|
|protocol|string|true|none|
|snmp_status|string|false|Get the status of SNMP service for the device <ul> <li> *CHECKING*:  Indicates that Domotz is currently verifying the SNMP status on the device. This is a transient state. </li><li> *NOT_FOUND*: This status indicates that the SNMP service could not be found on the device. </li><li> *NOT_AUTHENTICATED*: This status occurs when the SNMP service is detected as active, but Domotz is unable to retrieve data from it. This is most likely due to incorrect community strings or credentials. </li><li> *AUTHENTICATED*:  This status indicates that Domotz is successfully reading SNMP data from the device. </li></ul>|
|type|object|false|The device type, if recognised by domotz|
|» detected_id|integer(int32)|false|none|
|» id|integer(int32)|false|none|
|» label|string|false|none|
|user_data|object|false|none|
|» model|string|false|none|
|» name|string|false|none|
|» type|integer(int32)|false|none|
|» vendor|string|false|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authentication_status|NO_AUTHENTICATION|
|authentication_status|AUTHENTICATED|
|authentication_status|PENDING|
|authentication_status|REQUIRED|
|authentication_status|WRONG_CREDENTIALS|
|importance|VITAL|
|importance|FLOATING|
|protocol|IP|
|protocol|DUMMY|
|protocol|IP_EXTERNAL|
|snmp_status|CHECKING|
|snmp_status|NOT_FOUND|
|snmp_status|NOT_AUTHENTICATED|
|snmp_status|AUTHENTICATED|

<h2 id="tocSactivitylog">ActivityLog</h2>

<a id="schemaactivitylog"></a>

```json
{
  "description": "string",
  "details": {},
  "device_id": 0,
  "timestamp": "2019-08-24T14:15:22Z",
  "type": "note",
  "user": "string"
}

```

*An activity log item*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|description|string|true|Description of the event|
|details|object|false|Additional details of the event|
|device_id|integer(int32)|false|Device that triggered the event (if applicable)|
|timestamp|string(date-time)|true|Timestamp of the event|
|type|string|true|Type of the event|
|user|string|true|User who triggered the event|

#### Enumerated Values

|Property|Value|
|---|---|
|type|note|
|type|agent_alert_level_set|
|type|agent_alert_resume|
|type|rtd_session_start|
|type|cresnet_node_reboot|
|type|device_reboot|
|type|firmware_update_start|
|type|applications_terminate|
|type|configuration_restore|
|type|factory_reset|
|type|network_configuration_change|
|type|custom_driver_execute|
|type|remote_session_start|
|type|remote_session_terminate|
|type|remote_session_limit_reached|
|type|vpn_session_start|
|type|vpn_session_terminate|
|type|chat_started|
|type|chat_resolved|
|type|operator_joined|
|type|operator_left|
|type|power_on|
|type|power_off|
|type|power_cycle|
|type|camera_snapshot|
|type|camera_streaming_start|
|type|configuration_management_status_change|

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
  "installation_info": {
    "contract_id": "string",
    "customer_id": "string"
  },
  "licence": {
    "activation_time": "2019-08-24T14:15:22Z",
    "bound_mac_address": "string",
    "code": "string",
    "expiration_time": "2019-08-24T14:15:22Z",
    "id": 0
  },
  "location": {
    "latitude": "string",
    "longitude": "string"
  },
  "organization": {
    "id": 0,
    "name": "string"
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
  "wan_info": {
    "hostname": "string",
    "ip": "string"
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
|installation_info|object|false|none|
|» contract_id|string|false|none|
|» customer_id|string|false|none|
|licence|object|false|none|
|» activation_time|string(date-time)|false|none|
|» bound_mac_address|string|false|The MAC address of the primary interface of the device the software agent runs on|
|» code|string|false|none|
|» expiration_time|string(date-time)|false|none|
|» id|integer(int32)|false|none|
|location|object|false|none|
|» latitude|string|false|none|
|» longitude|string|false|none|
|organization|object|false|none|
|» id|integer(int32)|false|none|
|» name|string|false|none|
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
|wan_info|object|false|none|
|» hostname|string|false|none|
|» ip|string|false|none|

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
  "installation_info": {
    "contract_id": "string",
    "customer_id": "string"
  },
  "licence": {
    "activation_time": "2019-08-24T14:15:22Z",
    "bound_mac_address": "string",
    "code": "string",
    "expiration_time": "2019-08-24T14:15:22Z",
    "id": 0
  },
  "location": {
    "latitude": "string",
    "longitude": "string"
  },
  "organization": {
    "id": 0,
    "name": "string"
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
  "wan_info": {
    "hostname": "string",
    "ip": "string"
  },
  "listen_on": "string"
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
|» wan_info|object|false|none|
|»» hostname|string|false|none|
|»» ip|string|false|none|

<h2 id="tocSagentdeviceapplication">AgentDeviceApplication</h2>

<a id="schemaagentdeviceapplication"></a>

```json
{
  "application_id": "string",
  "device_id": "string",
  "first_time_seen": "2019-08-24T14:15:22Z",
  "info": "string",
  "install_date": "2019-08-24T14:15:22Z",
  "install_location": "string",
  "last_modified": "2019-08-24T14:15:22Z",
  "last_update": "2019-08-24T14:15:22Z",
  "name": "string",
  "publisher": "string",
  "version": "string"
}

```

*The list of applications of all devices belonging to the agent*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|application_id|string|true|none|
|device_id|string|true|none|
|first_time_seen|string(date-time)|true|none|
|info|string|false|none|
|install_date|string(date-time)|false|none|
|install_location|string|false|none|
|last_modified|string(date-time)|false|none|
|last_update|string(date-time)|false|none|
|name|string|false|none|
|publisher|string|false|none|
|version|string|false|none|

<h2 id="tocSagentdevicevariable">AgentDeviceVariable</h2>

<a id="schemaagentdevicevariable"></a>

```json
{
  "creation_time": "2019-08-24T14:15:22Z",
  "device_id": 0,
  "has_history": true,
  "id": 0,
  "label": "string",
  "metric": "string",
  "path": "string",
  "previous_value": "string",
  "unit": "string",
  "value": "string",
  "value_update_time": "2019-08-24T14:15:22Z"
}

```

*The representation of a device variable*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|creation_time|string(date-time)|false|The creation time of the variable|
|device_id|integer(int32)|true|The ID of the device|
|has_history|boolean|true|If true the history of the variable can be retrieved with <a href='#getvariablehistory'> getVariableHistory</a>|
|id|integer(int32)|true|The ID of the variable|
|label|string|false|The label|
|metric|string|false|The metric|
|path|string|true|The variable path|
|previous_value|string|false|The previous value of the variable|
|unit|string|false|The unit of measurement|
|value|string|false|The variable value|
|value_update_time|string(date-time)|false|The update time of the variable value|

<h2 id="tocSagentexternalhostscanpolicy">AgentExternalHostScanPolicy</h2>

<a id="schemaagentexternalhostscanpolicy"></a>

```json
{
  "icmp": {
    "enabled": true
  },
  "tcp_ack": {
    "enabled": true,
    "ports": [
      0
    ]
  },
  "tcp_syn": {
    "enabled": true,
    "ports": [
      0
    ]
  }
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|icmp|object|false|none|
|» enabled|boolean|true|Enable/disable this scan method|
|tcp_ack|object|false|none|
|» enabled|boolean|true|Enable/disable this scan method. The agent sends a TCP packet with only the acknowledgement (ACK) flag set, and a responding reset (RST) packet from the host reveals its presence.|
|» ports|[integer]|true|The list of TCP port to be scanned with this method. The list cannot be empty if this method is enabled|
|tcp_syn|object|false|none|
|» enabled|boolean|true|Enable or disable this scan method. The agent sends a SYN packet to the target host and waits for a response. If the target responds with a SYN/ACK packet or an RST packet, the host is considered up.|
|» ports|[integer]|true|The list of TCP port to be scanned with this method. The list cannot be empty if this method is enabled|

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

<h2 id="tocSagentipscanpolicy">AgentIPScanPolicy</h2>

<a id="schemaagentipscanpolicy"></a>

```json
{
  "forced_ip_addresses": [
    "string"
  ],
  "forced_ip_ranges": [
    {
      "end": "string",
      "start": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|forced_ip_addresses|[string]|true|The list of IP addresses always checked by the agent. By default the list is empty and the agent performs hosts discovery automatically. The addresses must be expressed in dotted decimal notation and must belong to private networks (see <a href='https://www.iana.org/assignments/iana-ipv4-special-registry/iana-ipv4-special-registry.xhtml/'>iana-ipv4-special-registry</a>)|
|forced_ip_ranges|[object]|true|The list of IP address ranges always checked by the agent. By default the list is empty and the agent performs hosts discovery automatically. The addresses must be expressed in dotted decimal notation and must belong to private networks (see <a href='https://www.iana.org/assignments/iana-ipv4-special-registry/iana-ipv4-special-registry.xhtml/'>iana-ipv4-special-registry</a>)|
|» end|string|true|192.168.1.10|
|» start|string|true|192.168.1.1|

<h2 id="tocSagentinterfacespolicy">AgentInterfacesPolicy</h2>

<a id="schemaagentinterfacespolicy"></a>

```json
{
  "policy": "allow",
  "rules": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|policy|string|true|none|
|rules|[string]|true|Rules can be expressed as lists of case-insensitive strings representing the names of the interfaces to be matched. The `*` wildcard can be used to match variable parts of the interface name. Example: `["eth*", "tun0"]`|

#### Enumerated Values

|Property|Value|
|---|---|
|policy|allow|
|policy|deny|

<h2 id="tocSagentipconflict">AgentIpConflict</h2>

<a id="schemaagentipconflict"></a>

```json
{
  "conflicting_devices": [
    {
      "id": 0,
      "mac": "string"
    }
  ],
  "ip": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|conflicting_devices|[object]|false|none|
|» id|integer(int32)|false|none|
|» mac|string|false|none|
|ip|string|false|none|

<h2 id="tocSagentlanchangeevent">AgentLANChangeEvent</h2>

<a id="schemaagentlanchangeevent"></a>

```json
{
  "data": {
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "agent_id": 0,
    "dhcp": {
      "new": [
        "string"
      ],
      "old": [
        "string"
      ]
    },
    "dns": {
      "new": [
        "string"
      ],
      "old": [
        "string"
      ]
    },
    "gateway": {
      "new": "string",
      "old": "string"
    }
  },
  "name": "agent_lan_change",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when gateway, DNS servers, DHCP servers change*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent|[AgentBase](#schemaagentbase)|false|none|
|» agent_id|integer(int32)|true|The `id` of the `agent`|
|» dhcp|object|false|none|
|»» new|[string]|false|none|
|»» old|[string]|false|none|
|» dns|object|false|none|
|»» new|[string]|false|none|
|»» old|[string]|false|none|
|» gateway|object|false|none|
|»» new|string|false|none|
|»» old|string|false|none|
|» name|string|true|none|
|» timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|name|agent_lan_change|

<h2 id="tocSagentsecurityissueevent">AgentSecurityIssueEvent</h2>

<a id="schemaagentsecurityissueevent"></a>

```json
{
  "data": {
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
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
|» agent|[AgentBase](#schemaagentbase)|false|none|
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
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
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
|» agent|[AgentBase](#schemaagentbase)|false|none|
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
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
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
|» agent|[AgentBase](#schemaagentbase)|false|none|
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

<h2 id="tocSagentuptime">AgentUptime</h2>

<a id="schemaagentuptime"></a>

```json
{
  "agent_id": 0,
  "downtime_intervals": [
    {
      "end": "2019-08-24T14:15:22Z",
      "start": "2019-08-24T14:15:22Z"
    }
  ],
  "online_seconds": 0,
  "total_seconds": 0,
  "uptime": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|agent_id|integer(int32)|true|none|
|downtime_intervals|[object]|false|none|
|» end|string(date-time)|false|none|
|» start|string(date-time)|false|none|
|online_seconds|integer(int32)|true|none|
|total_seconds|integer(int32)|true|none|
|uptime|string|true|The uptime percentage of the agent|

<h2 id="tocSagentvpnactiveconnection">AgentVPNActiveConnection</h2>

<a id="schemaagentvpnactiveconnection"></a>

```json
{
  "bytes": 0,
  "creation_time": "2019-08-24T14:15:22Z",
  "expiration_time": "2019-08-24T14:15:22Z",
  "id": 0,
  "name": "string",
  "status": "ACTIVE"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|bytes|integer(int32)|true|Current VPN connection consumption (bytes)|
|creation_time|string(date-time)|true|none|
|expiration_time|string(date-time)|true|none|
|id|integer(int32)|true|The ID of the VPN connection|
|name|string|true|The user that started the VPN connection|
|status|string|true|The status of the vpn connection|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|EXPIRED|

<h2 id="tocSagentvpnconnection">AgentVPNConnection</h2>

<a id="schemaagentvpnconnection"></a>

```json
{
  "allowed_ip": "string",
  "routing_policy": "global",
  "ttl_hours": 1
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|allowed_ip|string|true|The only public IP address allowed to access the connection.         It will be impossible to use the connection from other IP addresses. You should use your public IP address.|
|routing_policy|string|true|The traffic routing policy for the VPN connection:  </br>- *global*: All the traffic is routed through the VPN On Demand. More consumption on the Domotz Cloud </br>- *local*: Only LAN traffic passes through the VPN On Demand. Less consumption on the Domotz Cloud|
|ttl_hours|integer(int32)|false|The duration in hours of the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|routing_policy|global|
|routing_policy|local|

<h2 id="tocSagentvariable">AgentVariable</h2>

<a id="schemaagentvariable"></a>

```json
{
  "creation_time": "2019-08-24T14:15:22Z",
  "has_history": true,
  "id": 0,
  "label": "string",
  "metric": "string",
  "path": "string",
  "previous_value": "string",
  "unit": "string",
  "value": "string",
  "value_update_time": "2019-08-24T14:15:22Z"
}

```

*The representation of an agent variable*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|creation_time|string(date-time)|false|The creation time of the variable|
|has_history|boolean|true|If true the history of the variable can be retrieved with <a href='#getvariablehistory'> getVariableHistory</a>|
|id|integer(int32)|true|The ID of the variable|
|label|string|false|The label|
|metric|string|false|The metric|
|path|string|true|The variable path|
|previous_value|string|false|The previous value of the variable|
|unit|string|false|The unit of measurement|
|value|string|false|The variable value|
|value_update_time|string(date-time)|false|The update time of the variable value|

<h2 id="tocSagentwanchangeevent">AgentWANChangeEvent</h2>

<a id="schemaagentwanchangeevent"></a>

```json
{
  "data": {
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "agent_id": 0,
    "ip": {
      "new": {
        "address": "string",
        "name": "string"
      },
      "old": {
        "address": "string",
        "name": "string"
      }
    },
    "provider": {
      "new": {
        "country": "string",
        "descr": "string",
        "inetnum": "string",
        "netname": "string"
      },
      "old": {
        "country": "string",
        "descr": "string",
        "inetnum": "string",
        "netname": "string"
      }
    }
  },
  "name": "agent_wan_change",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when ISP or Public IP address changes*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent|[AgentBase](#schemaagentbase)|false|none|
|» agent_id|integer(int32)|true|The `id` of the `agent`|
|» ip|object|false|none|
|»» new|object|false|none|
|»»» address|string|false|none|
|»»» name|string|false|none|
|»» old|object|false|none|
|»»» address|string|false|none|
|»»» name|string|false|none|
|»» provider|object|false|none|
|»»» new|object|false|none|
|»»»» country|string|false|none|
|»»»» descr|string|false|none|
|»»»» inetnum|string|false|none|
|»»»» netname|string|false|none|
|»»» old|object|false|none|
|»»»» country|string|false|none|
|»»»» descr|string|false|none|
|»»»» inetnum|string|false|none|
|»»»» netname|string|false|none|
|»»» name|string|true|none|
|»»» timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|name|agent_wan_change|

<h2 id="tocSalertprofile">AlertProfile</h2>

<a id="schemaalertprofile"></a>

```json
{
  "description": "string",
  "events": [
    "device_status_up"
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

<h2 id="tocSallagentinterfaces">AllAgentInterfaces</h2>

<a id="schemaallagentinterfaces"></a>

```json
{
  "attached": [
    {
      "address": "string",
      "mac_address": "string",
      "name": "string",
      "netmask": 0
    }
  ],
  "routed": [
    {
      "address": "string",
      "name": "string",
      "netmask": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|attached|[object]|true|none|
|» address|string|false|none|
|» mac_address|string|false|none|
|» name|string|true|none|
|» netmask|integer(int32)|false|none|
|routed|[object]|true|none|
|» address|string|false|none|
|» name|string|true|none|
|» netmask|integer(int32)|false|none|

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
|allowed_ip|string|true|The only public IP address allowed to access the connection.         It will be impossible to use the connection from other IP addresses. You should use your public IP address.|
|expiration|string(date-time)|false|The time after which the connection will be closed|
|id|integer(int32)|true|The unique identifier of the `connection`|
|link|string|false|Either the link to access the device's HTTP(s) interface in the browser or the host/port coordinates of the proxied TCP port, depending on the protocol (see protocol description in the request)|
|port|integer(int32)|true|none|
|protocol|string|true|The protocol wrapped by the connection:  </br>- *http/https*: the `link` field in the reply will contain an `https` URL. A browser or a similar user agent must be used: the client must have cookies enabled and the capability of following 302 redirects. If the protocol is `https` the device's certificate will be accepted without checks and its information ignored (our server will act as a proxy). </br>- *tcp*: the `link` field will be in the form `tcp://{host}:{port}`. Any connection established (e.g. with `telnet`  or `ssh`) on these coordinates will be securely forwarded to the requested `port` of the device.  </br>- *ssh*: the `link` field will  contain an `https` URL. A browser or a similar user agent must be used: the client must have cookies enabled and the capability of following 302 redirects. </br>- *rdp*: the `link` field will  contain an `https` URL. A browser or a similar user agent must be used: the client must have cookies enabled and the capability of following 302 redirects.|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|http|
|protocol|https|
|protocol|tcp|
|protocol|ssh|
|protocol|rdp|

<h2 id="tocScustomdriver">CustomDriver</h2>

<a id="schemacustomdriver"></a>

```json
{
  "code_inspection": {
    "data_saving_functions": [
      "string"
    ],
    "has_independent_variables": true,
    "has_parameters": true,
    "has_table": true
  },
  "description": "string",
  "device_ids": [
    0
  ],
  "id": 0,
  "is_valid": true,
  "minimal_sample_period": 0,
  "name": "string",
  "requires_credentials": true,
  "type": "GENERIC"
}

```

*A Custom Driver that can be applied on devices*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|code_inspection|object|true|Result of the Custom Driver code analysis|
|» data_saving_functions|[string]|true|A list of functions of the {CUSTOM_DRIVER} that save data. Only a one of these can be executed on the same device at a time.|
|» has_independent_variables|boolean|true|True if the Custom Driver creates independent variables on execution|
|» has_parameters|boolean|true|True if the Custom Driver uses parameters during execution|
|» has_table|boolean|true|True if the Custom Driver creates a variable table on execution|
|description|string|false|Description of the Custom Driver|
|device_ids|[integer]|true|List of the device IDs the Custom Driver is applied on|
|id|integer(int32)|true|The identifier of the Custom Driver|
|is_valid|boolean|true|True if the Custom Driver has valid code, False otherwise|
|minimal_sample_period|integer(int32)|true|The minimal sampling interval of the Custom Driver (in seconds)|
|name|string|true|Name of the Custom Driver|
|requires_credentials|boolean|true|True if the Custom Driver requires credentials to run, False otherwise|
|type|string|true|The Custom Driver type.  Driver usage differs between types such as data collection and/or available actions|

#### Enumerated Values

|Property|Value|
|---|---|
|type|GENERIC|
|type|CONFIGURATION_MANAGEMENT|

<h2 id="tocScustomdriverassociation">CustomDriverAssociation</h2>

<a id="schemacustomdriverassociation"></a>

```json
{
  "custom_driver_id": 0,
  "device_id": 0,
  "id": 0,
  "last_inspection_time": "2019-08-24T14:15:22Z",
  "parameters": [
    {
      "custom_driver_parameter_id": 0,
      "description": "string",
      "name": "string",
      "value": null,
      "value_type": "STRING"
    }
  ],
  "sample_period": 0,
  "status": "ENABLED",
  "used_variables": 0
}

```

*An association between a Custom Driver and a device*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|custom_driver_id|integer(int32)|true|The id of the Custom Driver|
|device_id|integer(int32)|true|The id of the device the Custom Driver is applied to|
|id|integer(int32)|true|The id of the association|
|last_inspection_time|string(date-time)|true|The last time (datetime) the device inspection was executed|
|parameters|[object]|false|Parameters used in the association|
|» custom_driver_parameter_id|integer(int32)|true|The id of the parameter on the driver level|
|» description|string|false|Description of the parameter|
|» name|string|true|The identifier by which the parameter is called in the driver script|
|» value|any|false|Value of the parameter used for the association. In case it is not set on the association level, the Custom Driver default is shown. Empty if the parameter was added to the Custom Driver without a default value after the association was created|
|» value_type|string|true|Value type of the parameter. Numbers are treated as floats, list items are treated as strings|
|sample_period|integer(int32)|true|The sampling interval of the Custom Driver (in seconds)|
|status|string|true|<ul><li> *ENABLED*: The association is enabled and running </li><li> *DISABLED*: The association is disabled due to failure </li></ul>|
|used_variables|integer(int32)|true|The number of variables used by this Custom Driver association|

#### Enumerated Values

|Property|Value|
|---|---|
|value_type|STRING|
|value_type|NUMBER|
|value_type|LIST|
|status|ENABLED|
|status|DISABLED|

<h2 id="tocScustomdriverassociationcreation">CustomDriverAssociationCreation</h2>

<a id="schemacustomdriverassociationcreation"></a>

```json
{
  "credentials": {
    "password": "string",
    "username": "string"
  },
  "parameters": [
    {
      "custom_driver_parameter_id": 0,
      "value": null
    }
  ],
  "sample_period": 0
}

```

*Properties for associating a Custom Driver and a device*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|credentials|object|false|The credentials for the Custom Driver (with scope CUSTOM_DRIVER_MANAGEMENT). Only required if the driver requires credentials, and there are none saved for the device|
|» password|string|true|password|
|» username|string|true|username|
|parameters|[object]|false|A list of parameters to be used for the association. Only required if the Custom Driver uses parameters. Parameters with default values at the driver level can be skipped.|
|» custom_driver_parameter_id|integer(int32)|true|The id of the parameter on the driver level|
|» value|any|false|Value of the parameter for the association. Its type can be either a float, a string or a list based on its value_type. The following restrictions apply based on the value type:  <ul><li>STRING: maximum 100 characters</li><li>LIST: maximum 50 items, maximum 100 characters each</li></ul>|
|sample_period|integer(int32)|false|The sampling interval of the Custom Driver (in seconds). Must be one of [300, 600, 900, 1800, 3600, 7200, 21600, 43200, 86400] and equal to or greater than the minimal_sample_period of the Custom Driver.  Default value is the minimal_sample_period of the Custom Driver|

<h2 id="tocScustomdriverassociationcreationresult">CustomDriverAssociationCreationResult</h2>

<a id="schemacustomdriverassociationcreationresult"></a>

```json
{
  "error": "string",
  "result": 0
}

```

*The outcome of applying a Custom Driver to a device*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|error|string|false|Description of the error that occurred. Returned in case of failure.|
|result|integer(int32)|false|The id of the newly created association. Returned in case of success.|

<h2 id="tocScustomdriverassociationparametercreation">CustomDriverAssociationParameterCreation</h2>

<a id="schemacustomdriverassociationparametercreation"></a>

```json
{
  "parameters": [
    {
      "custom_driver_parameter_id": 0,
      "value": null
    }
  ]
}

```

*Creation data for multiple association parameters*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|parameters|[object]|true|none|
|» custom_driver_parameter_id|integer(int32)|true|The id of the parameter on the driver level|
|» value|any|false|Value of the parameter for the association. Its type can be either a float, a string or a list based on its value_type. The following restrictions apply based on the value type:  <ul><li>STRING: maximum 100 characters</li><li>LIST: maximum 50 items, maximum 100 characters each</li></ul>|

<h2 id="tocScustomdriverdetails">CustomDriverDetails</h2>

<a id="schemacustomdriverdetails"></a>

```json
{
  "actions": [
    {
      "documentation": "string",
      "id": 0,
      "label": "string",
      "line": 0
    }
  ],
  "code": "string",
  "code_inspection": {
    "data_saving_functions": [
      "string"
    ],
    "has_independent_variables": true,
    "has_parameters": true,
    "has_table": true
  },
  "description": "string",
  "errors": [
    {
      "line": 0,
      "message": "string",
      "type": "string"
    }
  ],
  "id": 0,
  "is_valid": true,
  "minimal_sample_period": 0,
  "name": "string",
  "parameters": [
    {
      "default_value": null,
      "description": "string",
      "id": 0,
      "name": "string",
      "value_type": "STRING"
    }
  ],
  "requires_credentials": true,
  "type": "GENERIC"
}

```

*Detailed information for a Custom Driver that can be applied on devices*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|actions|[object]|true|A list of the custom actions that can be executed by this Custom Driver (empty if none exist)|
|» documentation|string|true|Detailed description of the custom driver action|
|» id|integer(int32)|true|Identifier of the custom driver action. Used in execution API Values range 1-30 depending on defined actions in the driver code|
|» label|string|true|The label of the action, shown as the button label in the ui when the driver is applied to a device|
|» line|integer(int32)|true|Line number of the function declaration for the action|
|code|string|true|The source code of the driver|
|code_inspection|object|true|Result of the Custom Driver code analysis|
|» data_saving_functions|[string]|true|A list of functions of the {CUSTOM_DRIVER} that save data. Only a one of these can be executed on the same device at a time.|
|» has_independent_variables|boolean|true|True if the Custom Driver creates independent variables on execution|
|» has_parameters|boolean|true|True if the Custom Driver uses parameters during execution|
|» has_table|boolean|true|True if the Custom Driver creates a variable table on execution|
|description|string|false|Description of the Custom Driver|
|errors|[object]|false|A list of errors in this drivers' code. Only returned if the driver's code is invalid and cannot be executed|
|» line|integer(int32)|false|The line number in the code that raised the error.|
|» message|string|false|Error message|
|» type|string|true|Type of the error|
|id|integer(int32)|true|The identifier of the Custom Driver|
|is_valid|boolean|true|True if the Custom Driver has valid code, False otherwise|
|minimal_sample_period|integer(int32)|true|The minimal sampling interval of the Custom Driver (in seconds)|
|name|string|true|Name of the Custom Driver|
|parameters|[object]|false|A list of parameters used by this Custom Driver. Only returned if the driver has parameters defined|
|» default_value|any|false|Default value of the parameter. Its type can be either a float, a string or a list based on its value_type.|
|» description|string|false|Description of the parameter|
|» id|integer(int32)|true|Unique id|
|» name|string|true|The identifier by which the parameter is called in the driver script|
|» value_type|string|true|Value type of the parameter. Numbers are treated as floats, list items are treated as strings|
|requires_credentials|boolean|true|True if the Custom Driver requires credentials to run, False otherwise|
|type|string|true|The Custom Driver type.  Driver usage differs between types such as data collection and/or available actions|

#### Enumerated Values

|Property|Value|
|---|---|
|value_type|STRING|
|value_type|NUMBER|
|value_type|LIST|
|type|GENERIC|
|type|CONFIGURATION_MANAGEMENT|

<h2 id="tocScustomdriverexecutionoptions">CustomDriverExecutionOptions</h2>

<a id="schemacustomdriverexecutionoptions"></a>

```json
{
  "test": true
}

```

*Options provided to a Custom Driver execution command*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|test|boolean|false|Determines whether the Custom Driver variables will be persisted in history. Defaults to false|

<h2 id="tocScustomdriverexecutionresult">CustomDriverExecutionResult</h2>

<a id="schemacustomdriverexecutionresult"></a>

```json
{
  "elapsed": 0,
  "errorMessage": "string",
  "errorType": "string",
  "log": [
    "string"
  ],
  "outcome": "undefined"
}

```

*The result of a Custom Driver execution command*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|elapsed|integer(int32)|false|The time it took to Execute the Custom Driver Action (in milliseconds)|
|errorMessage|string|false|Expanded description of the errorType returned in a failed Custom Driver Execution|
|errorType|string|false|Short name of the error returned with a failed outcome of the Custom Driver Execution|
|log|[string]|false|List of log messages generated during the Custom Driver Execution|
|outcome|string|true|Outcome from the Custom Driver Execution|

#### Enumerated Values

|Property|Value|
|---|---|
|outcome|success|
|outcome|failure|
|outcome|undefined|

<h2 id="tocSdhcpdevicediscoverysetting">DHCPDeviceDiscoverySetting</h2>

<a id="schemadhcpdevicediscoverysetting"></a>

```json
{
  "dhcp_device_discovery": true
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|dhcp_device_discovery|boolean|true|When set to 'true', the agent will create devices that initiate DHCP requests even if they fail to obtain an IP address|

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

<h2 id="tocSdeviceapplication">DeviceApplication</h2>

<a id="schemadeviceapplication"></a>

```json
{
  "application_id": "string",
  "first_time_seen": "2019-08-24T14:15:22Z",
  "info": "string",
  "install_date": "2019-08-24T14:15:22Z",
  "install_location": "string",
  "last_modified": "2019-08-24T14:15:22Z",
  "last_update": "2019-08-24T14:15:22Z",
  "name": "string",
  "publisher": "string",
  "version": "string"
}

```

*The list of applications of a device*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|application_id|string|true|none|
|first_time_seen|string(date-time)|true|none|
|info|string|false|none|
|install_date|string(date-time)|false|none|
|install_location|string|false|none|
|last_modified|string(date-time)|false|none|
|last_update|string(date-time)|false|none|
|name|string|false|none|
|publisher|string|false|none|
|version|string|false|none|

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
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "agent_id": 0,
    "device": {
      "authentication_status": "NO_AUTHENTICATION",
      "details": {
        "firmware_version": "string",
        "notes": "string",
        "room": "string",
        "serial": "string",
        "snmp_read_community": "string",
        "snmp_write_community": "string",
        "zone": "string"
      },
      "display_name": "string",
      "first_seen_on": "2019-08-24T14:15:22Z",
      "id": 0,
      "importance": "VITAL",
      "main_id": 0,
      "os": {
        "build": "string",
        "name": "string",
        "version": "string"
      },
      "protocol": "IP",
      "snmp_status": "CHECKING",
      "type": {
        "detected_id": 0,
        "id": 0,
        "label": "string"
      },
      "user_data": {
        "model": "string",
        "name": "string",
        "type": 0,
        "vendor": "string"
      }
    },
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
|» agent|[AgentBase](#schemaagentbase)|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|
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
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "agent_id": 0,
    "device": {
      "authentication_status": "NO_AUTHENTICATION",
      "details": {
        "firmware_version": "string",
        "notes": "string",
        "room": "string",
        "serial": "string",
        "snmp_read_community": "string",
        "snmp_write_community": "string",
        "zone": "string"
      },
      "display_name": "string",
      "first_seen_on": "2019-08-24T14:15:22Z",
      "id": 0,
      "importance": "VITAL",
      "main_id": 0,
      "os": {
        "build": "string",
        "name": "string",
        "version": "string"
      },
      "protocol": "IP",
      "snmp_status": "CHECKING",
      "type": {
        "detected_id": 0,
        "id": 0,
        "label": "string"
      },
      "user_data": {
        "model": "string",
        "name": "string",
        "type": 0,
        "vendor": "string"
      }
    },
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
|» agent|[AgentBase](#schemaagentbase)|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|
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
  "protocol": "http",
  "ttl_hours": 1
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|allowed_ip|string|true|The only public IP address allowed to access the connection.         It will be impossible to use the connection from other IP addresses. You should use your public IP address.|
|port|integer(int32)|true|none|
|protocol|string|true|The protocol wrapped by the connection:  </br>- *http/https*: the `link` field in the reply will contain an `https` URL. A browser or a similar user agent must be used: the client must have cookies enabled and the capability of following 302 redirects. If the protocol is `https` the device's certificate will be accepted without checks and its information ignored (our server will act as a proxy). </br>- *tcp*: the `link` field will be in the form `tcp://{host}:{port}`. Any connection established (e.g. with `telnet`  or `ssh`) on these coordinates will be securely forwarded to the requested `port` of the device.  </br>- *ssh*: the `link` field will  contain an `https` URL. A browser or a similar user agent must be used: the client must have cookies enabled and the capability of following 302 redirects. </br>- *rdp*: the `link` field will  contain an `https` URL. A browser or a similar user agent must be used: the client must have cookies enabled and the capability of following 302 redirects.|
|ttl_hours|integer(int32)|false|The duration in hours of the connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|http|
|protocol|https|
|protocol|tcp|
|protocol|ssh|
|protocol|rdp|

<h2 id="tocSdevicecredentials">DeviceCredentials</h2>

<a id="schemadevicecredentials"></a>

```json
{
  "password": "string",
  "scope": "DEVICE_MANAGEMENT",
  "username": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|password|string|true|password|
|scope|string|false|The Scope for the Credentials. Default is 'DEVICE_MANAGEMENT' used for device integrations|
|username|string|true|username|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|CUSTOM_DRIVER_MANAGEMENT|
|scope|CONFIGURATION_MANAGEMENT|
|scope|DEVICE_MANAGEMENT|
|scope|OS_MANAGEMENT|

<h2 id="tocSdevicediscoveryevent">DeviceDiscoveryEvent</h2>

<a id="schemadevicediscoveryevent"></a>

```json
{
  "data": {
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "agent_id": 0,
    "device": {
      "authentication_status": "NO_AUTHENTICATION",
      "details": {
        "firmware_version": "string",
        "notes": "string",
        "room": "string",
        "serial": "string",
        "snmp_read_community": "string",
        "snmp_write_community": "string",
        "zone": "string"
      },
      "display_name": "string",
      "first_seen_on": "2019-08-24T14:15:22Z",
      "id": 0,
      "importance": "VITAL",
      "main_id": 0,
      "os": {
        "build": "string",
        "name": "string",
        "version": "string"
      },
      "protocol": "IP",
      "snmp_status": "CHECKING",
      "type": {
        "detected_id": 0,
        "id": 0,
        "label": "string"
      },
      "user_data": {
        "model": "string",
        "name": "string",
        "type": 0,
        "vendor": "string"
      }
    },
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
|» agent|[AgentBase](#schemaagentbase)|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|
|» device_id|integer(int32)|false|The `id` of the `device`|
|name|string|true|none|
|timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|name|agent_device_discovery|

<h2 id="tocSdeviceeyesnmphistorysample">DeviceEyeSNMPHistorySample</h2>

<a id="schemadeviceeyesnmphistorysample"></a>

```json
{
  "enum_value": "string",
  "timestamp": "2019-08-24T14:15:22Z",
  "value": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|enum_value|string|false|none|
|timestamp|string(date-time)|true|The time the sample was reported to Domotz|
|value|string|true|none|

<h2 id="tocSdeviceheartbeatlostevent">DeviceHeartbeatLostEvent</h2>

<a id="schemadeviceheartbeatlostevent"></a>

```json
{
  "data": {
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "agent_id": 0,
    "device": {
      "authentication_status": "NO_AUTHENTICATION",
      "details": {
        "firmware_version": "string",
        "notes": "string",
        "room": "string",
        "serial": "string",
        "snmp_read_community": "string",
        "snmp_write_community": "string",
        "zone": "string"
      },
      "display_name": "string",
      "first_seen_on": "2019-08-24T14:15:22Z",
      "id": 0,
      "importance": "VITAL",
      "main_id": 0,
      "os": {
        "build": "string",
        "name": "string",
        "version": "string"
      },
      "protocol": "IP",
      "snmp_status": "CHECKING",
      "type": {
        "detected_id": 0,
        "id": 0,
        "label": "string"
      },
      "user_data": {
        "model": "string",
        "name": "string",
        "type": 0,
        "vendor": "string"
      }
    },
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
|» agent|[AgentBase](#schemaagentbase)|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|
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
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "agent_id": 0,
    "device": {
      "authentication_status": "NO_AUTHENTICATION",
      "details": {
        "firmware_version": "string",
        "notes": "string",
        "room": "string",
        "serial": "string",
        "snmp_read_community": "string",
        "snmp_write_community": "string",
        "zone": "string"
      },
      "display_name": "string",
      "first_seen_on": "2019-08-24T14:15:22Z",
      "id": 0,
      "importance": "VITAL",
      "main_id": 0,
      "os": {
        "build": "string",
        "name": "string",
        "version": "string"
      },
      "protocol": "IP",
      "snmp_status": "CHECKING",
      "type": {
        "detected_id": 0,
        "id": 0,
        "label": "string"
      },
      "user_data": {
        "model": "string",
        "name": "string",
        "type": 0,
        "vendor": "string"
      }
    },
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
|» agent|[AgentBase](#schemaagentbase)|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|
|» device_id|integer(int32)|true|The `id` of the `device`|
|» old_ip_addresses|[string]|false|The list of previous IP addresses|
|» value|[string]|false|The list of new IP addresses|
|name|string|true|none|
|timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|name|device_ip_change|

<h2 id="tocSdeviceinventoryfield">DeviceInventoryField</h2>

<a id="schemadeviceinventoryfield"></a>

```json
{
  "creation_time": "2019-08-24T14:15:22Z",
  "key": "string",
  "value": "string"
}

```

*A device inventory field*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|creation_time|string(date-time)|false|none|
|key|string|true|The name of the field, unique in the Inventory|
|value|string|true|none|

<h2 id="tocSdeviceoutlet">DeviceOutlet</h2>

<a id="schemadeviceoutlet"></a>

```json
{
  "can_write": true,
  "custom_name": "string",
  "device_id": 0,
  "id": "string",
  "links": [
    0
  ],
  "name": "string",
  "power": "ON"
}

```

*Power outlet of a device*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|can_write|boolean|true|True if power actions can be executed on the outlet|
|custom_name|string|false|Name of the outlet assigned by the user|
|device_id|integer(int32)|true|Unique identifier of the device the outlet belongs to|
|id|string|true|Unique identifier of the outlet|
|links|[integer]|true|List of device ids attached to the outlet|
|name|string|true|Name of the outlet discovered automatically|
|power|string|true|The current power state of the outlet|

#### Enumerated Values

|Property|Value|
|---|---|
|power|ON|
|power|OFF|
|power|unknown|

<h2 id="tocSdeviceoutletupdate">DeviceOutletUpdate</h2>

<a id="schemadeviceoutletupdate"></a>

```json
{
  "custom_name": "string"
}

```

*Outlet update data*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|custom_name|string|false|Custom name to assign to the outlet|

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
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "agent_id": 0,
    "device": {
      "authentication_status": "NO_AUTHENTICATION",
      "details": {
        "firmware_version": "string",
        "notes": "string",
        "room": "string",
        "serial": "string",
        "snmp_read_community": "string",
        "snmp_write_community": "string",
        "zone": "string"
      },
      "display_name": "string",
      "first_seen_on": "2019-08-24T14:15:22Z",
      "id": 0,
      "importance": "VITAL",
      "main_id": 0,
      "os": {
        "build": "string",
        "name": "string",
        "version": "string"
      },
      "protocol": "IP",
      "snmp_status": "CHECKING",
      "type": {
        "detected_id": 0,
        "id": 0,
        "label": "string"
      },
      "user_data": {
        "model": "string",
        "name": "string",
        "type": 0,
        "vendor": "string"
      }
    },
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
|» agent|[AgentBase](#schemaagentbase)|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|
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
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "agent_id": 0,
    "device": {
      "authentication_status": "NO_AUTHENTICATION",
      "details": {
        "firmware_version": "string",
        "notes": "string",
        "room": "string",
        "serial": "string",
        "snmp_read_community": "string",
        "snmp_write_community": "string",
        "zone": "string"
      },
      "display_name": "string",
      "first_seen_on": "2019-08-24T14:15:22Z",
      "id": 0,
      "importance": "VITAL",
      "main_id": 0,
      "os": {
        "build": "string",
        "name": "string",
        "version": "string"
      },
      "protocol": "IP",
      "snmp_status": "CHECKING",
      "type": {
        "detected_id": 0,
        "id": 0,
        "label": "string"
      },
      "user_data": {
        "model": "string",
        "name": "string",
        "type": 0,
        "vendor": "string"
      }
    },
    "device_id": 0,
    "enum_value": "string",
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
|» agent|[AgentBase](#schemaagentbase)|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|
|» device_id|integer(int32)|true|The `id` of the `device`|
|» enum_value|string|false|The current enum value of the SNMP sensor if the OID is of type enum|
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
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "agent_id": 0,
    "device": {
      "authentication_status": "NO_AUTHENTICATION",
      "details": {
        "firmware_version": "string",
        "notes": "string",
        "room": "string",
        "serial": "string",
        "snmp_read_community": "string",
        "snmp_write_community": "string",
        "zone": "string"
      },
      "display_name": "string",
      "first_seen_on": "2019-08-24T14:15:22Z",
      "id": 0,
      "importance": "VITAL",
      "main_id": 0,
      "os": {
        "build": "string",
        "name": "string",
        "version": "string"
      },
      "protocol": "IP",
      "snmp_status": "CHECKING",
      "type": {
        "detected_id": 0,
        "id": 0,
        "label": "string"
      },
      "user_data": {
        "model": "string",
        "name": "string",
        "type": 0,
        "vendor": "string"
      }
    },
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
|» agent|[AgentBase](#schemaagentbase)|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|
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
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "agent_id": 0,
    "device": {
      "authentication_status": "NO_AUTHENTICATION",
      "details": {
        "firmware_version": "string",
        "notes": "string",
        "room": "string",
        "serial": "string",
        "snmp_read_community": "string",
        "snmp_write_community": "string",
        "zone": "string"
      },
      "display_name": "string",
      "first_seen_on": "2019-08-24T14:15:22Z",
      "id": 0,
      "importance": "VITAL",
      "main_id": 0,
      "os": {
        "build": "string",
        "name": "string",
        "version": "string"
      },
      "protocol": "IP",
      "snmp_status": "CHECKING",
      "type": {
        "detected_id": 0,
        "id": 0,
        "label": "string"
      },
      "user_data": {
        "model": "string",
        "name": "string",
        "type": 0,
        "vendor": "string"
      }
    },
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
|» agent|[AgentBase](#schemaagentbase)|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|
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

<h2 id="tocSdeviceuptime">DeviceUptime</h2>

<a id="schemadeviceuptime"></a>

```json
{
  "agent_uptime": "string",
  "downtime_intervals": [
    {
      "end": "2019-08-24T14:15:22Z",
      "start": "2019-08-24T14:15:22Z"
    }
  ],
  "online_seconds": 0,
  "total_seconds": 0,
  "uptime": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|agent_uptime|string|true|The uptime percentage of the agent|
|downtime_intervals|[object]|false|none|
|» end|string(date-time)|false|none|
|» start|string(date-time)|false|none|
|online_seconds|integer(int32)|true|none|
|total_seconds|integer(int32)|true|none|
|uptime|string|true|The uptime percentage of the device|

<h2 id="tocSdevicevariable">DeviceVariable</h2>

<a id="schemadevicevariable"></a>

```json
{
  "creation_time": "2019-08-24T14:15:22Z",
  "has_history": true,
  "id": 0,
  "label": "string",
  "metric": "string",
  "path": "string",
  "previous_value": "string",
  "unit": "string",
  "value": "string",
  "value_update_time": "2019-08-24T14:15:22Z"
}

```

*The representation of a device variable*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|creation_time|string(date-time)|false|The creation time of the variable|
|has_history|boolean|true|If true the history of the variable can be retrieved with <a href='#getvariablehistory'> getVariableHistory</a>|
|id|integer(int32)|true|The ID of the variable|
|label|string|false|The label|
|metric|string|false|The metric|
|path|string|true|The variable path|
|previous_value|string|false|The previous value of the variable|
|unit|string|false|The unit of measurement|
|value|string|false|The variable value|
|value_update_time|string(date-time)|false|The update time of the variable value|

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

*Information about Domotz Sensors current usage and limits*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|limit|integer(int32)|false|Number of allowed Domotz Sensors for the agent|
|usage|object|false|none|
|» snmp|integer(int32)|false|Number of configured Domotz Sensors of type `snmp` on the agent.|
|» tcp|integer(int32)|false|Number of configured Domotz Sensors of type `tcp` on the agent.|
|» total|integer(int32)|false|Number of configured Domotz Sensors on the agent.|

<h2 id="tocSdomotzmetricusageinformation">DomotzMetricUsageInformation</h2>

<a id="schemadomotzmetricusageinformation"></a>

```json
{
  "limit": 0,
  "usage": {
    "custom_driver": 0,
    "snmp": 0,
    "tcp": 0,
    "total": 0
  }
}

```

*Information about Domotz Sensors current usage and limits*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|limit|integer(int32)|false|Number of allowed Domotz Sensors for the agent|
|usage|object|false|none|
|» custom_driver|integer(int32)|false|Number of configured Domotz Sensors of type `custom driver` on the agent.|
|» snmp|integer(int32)|false|Number of configured Domotz Sensors of type `snmp` on the agent.|
|» tcp|integer(int32)|false|Number of configured Domotz Sensors of type `tcp` on the agent.|
|» total|integer(int32)|false|Number of configured Domotz Sensors on the agent.|

<h2 id="tocSdummydevice">DummyDevice</h2>

<a id="schemadummydevice"></a>

```json
{
  "authentication_status": "NO_AUTHENTICATION",
  "details": {
    "firmware_version": "string",
    "notes": "string",
    "room": "string",
    "serial": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "os": {
    "build": "string",
    "name": "string",
    "version": "string"
  },
  "protocol": "IP",
  "snmp_status": "CHECKING",
  "type": {
    "detected_id": 0,
    "id": 0,
    "label": "string"
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
|*anonymous*|object|false|A device that has no network access whatsoever and cannot be discovered or interacted with by      the agent.   A user can create a Dummy Device to attach it to a power outlet so that it is easier to remember which port controls the device|

<h2 id="tocSexternalhost">ExternalHost</h2>

<a id="schemaexternalhost"></a>

```json
{
  "host": "string",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|host|string|true|Hostname or IP Address|
|name|string|true|Device Name|

<h2 id="tocSexternalipdevice">ExternalIpDevice</h2>

<a id="schemaexternalipdevice"></a>

```json
{
  "authentication_status": "NO_AUTHENTICATION",
  "details": {
    "firmware_version": "string",
    "notes": "string",
    "room": "string",
    "serial": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "os": {
    "build": "string",
    "name": "string",
    "version": "string"
  },
  "protocol": "IP",
  "snmp_status": "CHECKING",
  "type": {
    "detected_id": 0,
    "id": 0,
    "label": "string"
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
  "open_ports": {
    "tcp": [
      0
    ],
    "udp": [
      0
    ]
  },
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
|*anonymous*|object|false|A device added by the means of 'Advanced Monitoring': it is an IP device manually added by the user, no discoveries are done over it, just periodical ping to see whether it is reachable|
|» names|object|false|none|
|»» host|string|false|none|
|»» inspection|string|false|none|

<h2 id="tocSfeaturediscoveryevent">FeatureDiscoveryEvent</h2>

<a id="schemafeaturediscoveryevent"></a>

```json
{
  "data": {
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "agent_id": 0,
    "device": {
      "authentication_status": "NO_AUTHENTICATION",
      "details": {
        "firmware_version": "string",
        "notes": "string",
        "room": "string",
        "serial": "string",
        "snmp_read_community": "string",
        "snmp_write_community": "string",
        "zone": "string"
      },
      "display_name": "string",
      "first_seen_on": "2019-08-24T14:15:22Z",
      "id": 0,
      "importance": "VITAL",
      "main_id": 0,
      "os": {
        "build": "string",
        "name": "string",
        "version": "string"
      },
      "protocol": "IP",
      "snmp_status": "CHECKING",
      "type": {
        "detected_id": 0,
        "id": 0,
        "label": "string"
      },
      "user_data": {
        "model": "string",
        "name": "string",
        "type": 0,
        "vendor": "string"
      }
    },
    "device_id": 0,
    "feature": "mib_discovery",
    "value": {
      "data": {}
    }
  },
  "name": "agent_feature_discovery",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when a new feature is discovered on a device*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent|[AgentBase](#schemaagentbase)|false|none|
|» agent_id|integer(int32)|false|The `id` of the `agent`|
|» device|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|
|» device_id|integer(int32)|false|The `id` of the `device`|
|» feature|string|false|The discovered feature|
|» value|object|false|none|
|»» data|object|false|none|
|» name|string|true|none|
|» timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|feature|mib_discovery|
|name|agent_feature_discovery|

<h2 id="tocSinventoryfield">InventoryField</h2>

<a id="schemainventoryfield"></a>

```json
{
  "label": "string",
  "creation_time": "2019-08-24T14:15:22Z",
  "defined_by_user": 0,
  "key": "string"
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[WriteInventoryField](#schemawriteinventoryfield)|false|DTO Used for creating/updating Inventory fields|

*and*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|object|false|DTO Returned by the API describing an Inventory Field|
|» creation_time|string(date-time)|false|none|
|» defined_by_user|integer(int32)|false|The `id` of the user that defined the inventory field - if different from your id, this field can't be deleted or changed|
|» key|string|true|The name of the field, unique in the Inventory|

<h2 id="tocSipdevice">IpDevice</h2>

<a id="schemaipdevice"></a>

```json
{
  "authentication_status": "NO_AUTHENTICATION",
  "details": {
    "firmware_version": "string",
    "notes": "string",
    "room": "string",
    "serial": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "os": {
    "build": "string",
    "name": "string",
    "version": "string"
  },
  "protocol": "IP",
  "snmp_status": "CHECKING",
  "type": {
    "detected_id": 0,
    "id": 0,
    "label": "string"
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
  "open_ports": {
    "tcp": [
      0
    ],
    "udp": [
      0
    ]
  },
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
|» open_ports|object|false|The list of TCP and UDP open ports. Domotz scans a subset of all the ports, visit the <a href='https://help.domotz.com/user-guide/device-tcp-udp-ports-services-discovery/'>user guide</a> for more details.|
|»» tcp|[integer]|false|none|
|»» udp|[integer]|false|none|
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
  "authentication_status": "NO_AUTHENTICATION",
  "details": {
    "firmware_version": "string",
    "notes": "string",
    "room": "string",
    "serial": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "os": {
    "build": "string",
    "name": "string",
    "version": "string"
  },
  "protocol": "IP",
  "snmp_status": "CHECKING",
  "type": {
    "detected_id": 0,
    "id": 0,
    "label": "string"
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
  "open_ports": {
    "tcp": [
      0
    ],
    "udp": [
      0
    ]
  },
  "status": "ONLINE",
  "vendor": "string",
  "hw_address": "string",
  "is_jammed": true,
  "names": {
    "bonjour": "string",
    "dhcp": "string",
    "host": "string",
    "inspection": "string",
    "netbios": "string",
    "snmp": "string",
    "upnp": "string",
    "zeroconf": "string"
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
|»» netbios|string|false|none|
|»» snmp|string|false|none|
|»» upnp|string|false|none|
|»» zeroconf|string|false|none|

<h2 id="tocSmibdiscoveryevent">MibDiscoveryEvent</h2>

<a id="schemamibdiscoveryevent"></a>

```json
{
  "data": {
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "agent_id": 0,
    "device": {
      "authentication_status": "NO_AUTHENTICATION",
      "details": {
        "firmware_version": "string",
        "notes": "string",
        "room": "string",
        "serial": "string",
        "snmp_read_community": "string",
        "snmp_write_community": "string",
        "zone": "string"
      },
      "display_name": "string",
      "first_seen_on": "2019-08-24T14:15:22Z",
      "id": 0,
      "importance": "VITAL",
      "main_id": 0,
      "os": {
        "build": "string",
        "name": "string",
        "version": "string"
      },
      "protocol": "IP",
      "snmp_status": "CHECKING",
      "type": {
        "detected_id": 0,
        "id": 0,
        "label": "string"
      },
      "user_data": {
        "model": "string",
        "name": "string",
        "type": 0,
        "vendor": "string"
      }
    },
    "device_id": 0,
    "feature": "mib_discovery",
    "value": {
      "data": {
        "mib": [
          "string"
        ]
      }
    }
  },
  "name": "agent_feature_discovery",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

### Properties

*allOf*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|[FeatureDiscoveryEvent](#schemafeaturediscoveryevent)|false|Triggered when a new feature is discovered on a device|

*and*

|Name|Type|Required|Description|
|---|---|---|---|---|
|*anonymous*|object|false|Triggered when a new feature MIB is discovered on a device|
|» data|object|false|none|
|»» agent|[AgentBase](#schemaagentbase)|false|none|
|»» device|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|
|»» value|object|false|none|
|»»» data|object|false|none|
|»»»» mib|[string]|false|The discovered MIB|

<h2 id="tocSmonitoringprofilestatechanged">MonitoringProfileStateChanged</h2>

<a id="schemamonitoringprofilestatechanged"></a>

```json
{
  "data": {
    "agent": {
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
      "installation_info": {
        "contract_id": "string",
        "customer_id": "string"
      },
      "licence": {
        "activation_time": "2019-08-24T14:15:22Z",
        "bound_mac_address": "string",
        "code": "string",
        "expiration_time": "2019-08-24T14:15:22Z",
        "id": 0
      },
      "location": {
        "latitude": "string",
        "longitude": "string"
      },
      "organization": {
        "id": 0,
        "name": "string"
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
      "wan_info": {
        "hostname": "string",
        "ip": "string"
      }
    },
    "details": {},
    "device": {
      "authentication_status": "NO_AUTHENTICATION",
      "details": {
        "firmware_version": "string",
        "notes": "string",
        "room": "string",
        "serial": "string",
        "snmp_read_community": "string",
        "snmp_write_community": "string",
        "zone": "string"
      },
      "display_name": "string",
      "first_seen_on": "2019-08-24T14:15:22Z",
      "id": 0,
      "importance": "VITAL",
      "main_id": 0,
      "os": {
        "build": "string",
        "name": "string",
        "version": "string"
      },
      "protocol": "IP",
      "snmp_status": "CHECKING",
      "type": {
        "detected_id": 0,
        "id": 0,
        "label": "string"
      },
      "user_data": {
        "model": "string",
        "name": "string",
        "type": 0,
        "vendor": "string"
      }
    },
    "metric": "string",
    "monitoring_profile": {
      "name": "string"
    },
    "state": {
      "current": "string",
      "previous": "string"
    },
    "value": {
      "current": {},
      "previous": {}
    },
    "variable": {
      "creation_time": "2019-08-24T14:15:22Z",
      "has_history": true,
      "id": 0,
      "label": "string",
      "metric": "string",
      "path": "string",
      "previous_value": "string",
      "unit": "string",
      "value": "string",
      "value_update_time": "2019-08-24T14:15:22Z"
    }
  },
  "name": "monitoring_profile_state_changed",
  "timestamp": "2019-08-24T14:15:22Z"
}

```

*Triggered when a monitoring profile state changes*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|data|object|false|none|
|» agent|[AgentBase](#schemaagentbase)|false|none|
|» details|object|false|none|
|» device|[AbstractDevice](#schemaabstractdevice)|false|Base abstract class for all devices|
|» metric|string|true|none|
|» monitoring_profile|object|false|none|
|»» name|string|true|none|
|» state|object|false|none|
|»» current|string|false|none|
|»» previous|string|false|none|
|» value|object|false|none|
|»» current|object|false|none|
|»» previous|object|false|none|
|» variable|[DeviceVariable](#schemadevicevariable)|false|The representation of a device variable|
|name|string|true|none|
|timestamp|string(date-time)|true|The timestamp of the event|

#### Enumerated Values

|Property|Value|
|---|---|
|name|monitoring_profile_state_changed|

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

<h2 id="tocSnetworktopology">NetworkTopology</h2>

<a id="schemanetworktopology"></a>

```json
{
  "edges": [
    {
      "from": 0,
      "to": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|edges|[object]|true|The list of edges. Each item contains the IDs of the connected devices.|
|» from|integer(int32)|true|none|
|» to|integer(int32)|true|none|

<h2 id="tocSroutednetwork">RoutedNetwork</h2>

<a id="schemaroutednetwork"></a>

```json
{
  "address": "string",
  "name": "string",
  "netmask": 0
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|address|string|true|none|
|name|string|true|none|
|netmask|integer(int32)|true|none|

<h2 id="tocSsnmpdomotzagenteye">SNMPDomotzAgentEye</h2>

<a id="schemasnmpdomotzagenteye"></a>

```json
{
  "category": "OTHER",
  "device_id": 0,
  "id": 0,
  "name": "string",
  "oid": "string",
  "value_type": "STRING"
}

```

*Information about a configured SNMP Domotz Sensor*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|category|string|true|The category of the OID|
|device_id|integer(int32)|false|The unique identifier of the device|
|id|integer(int32)|true|The ID of the SNMP Domotz Sensor|
|name|string|true|The name of the Domotz Sensors|
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
|value_type|ENUM|

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
|authentication_protocol|SHA-224|
|authentication_protocol|SHA-256|
|authentication_protocol|SHA-384|
|authentication_protocol|SHA-512|
|encryption_protocol|DES|
|encryption_protocol|AES|
|encryption_protocol|AES-256B|
|encryption_protocol|AES-256R|
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
  "device_id": 0,
  "id": 0,
  "last_update": "2019-08-24T14:15:22Z",
  "latest_enum_value": "string",
  "latest_value": "string",
  "name": "string",
  "oid": "string",
  "value_type": "STRING"
}

```

*Information about a configured SNMP Domotz Sensor*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|category|string|true|The category of the OID|
|device_id|integer(int32)|false|The unique identifier of the device|
|id|integer(int32)|true|The ID of the SNMP Domotz Sensor|
|last_update|string(date-time)|true|The timestamp of the latest update|
|latest_enum_value|string|false|The enum value retrieved on the OID|
|latest_value|string|true|The value retrieved on the OID|
|name|string|true|The name of the Domotz Sensors|
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
|value_type|ENUM|

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

*SNMP Domotz Sensor Data*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|category|string|true|The category of the OID|
|name|string|true|The name of the Domotz Sensors|
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
|value_type|ENUM|

<h2 id="tocSsnmpdomotzeyetrigger">SNMPDomotzEyeTrigger</h2>

<a id="schemasnmpdomotzeyetrigger"></a>

```json
{
  "alert": {
    "email": true,
    "mobile": true
  },
  "creation_time": "2019-08-24T14:15:22Z",
  "function_id": 0,
  "id": 0,
  "name": "string",
  "operands": [
    "string"
  ]
}

```

*Information about a trigger*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|alert|object|false|The alerts details|
|» email|boolean|false|True if the email alert is active|
|» mobile|boolean|false|True if the mobile alert is active|
|creation_time|string(date-time)|false|none|
|function_id|integer(int32)|true|The unique identifier of the function assigned to the trigger|
|id|integer(int32)|true|The unique identifier of the SNMP Trigger|
|name|string|true|The name of the trigger|
|operands|[string]|true|The operands for the function|

<h2 id="tocSsnmpdomotzeyetriggerfunction">SNMPDomotzEyeTriggerFunction</h2>

<a id="schemasnmpdomotzeyetriggerfunction"></a>

```json
{
  "cardinality": 0,
  "id": 0,
  "name": "string",
  "value_types": "STRING"
}

```

*Information about a trigger function*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|cardinality|integer(int32)|true|The number of arguments of the function|
|id|integer(int32)|true|The unique identifier of the SNMP Trigger function|
|name|string|true|The name of the function|
|value_types|string|true|The type of the operands|

#### Enumerated Values

|Property|Value|
|---|---|
|value_types|STRING|
|value_types|NUMERIC|
|value_types|ENUM|

<h2 id="tocSsnmpdomotzsnmptriggeralertcreation">SNMPDomotzSnmpTriggerAlertCreation</h2>

<a id="schemasnmpdomotzsnmptriggeralertcreation"></a>

```json
{}

```

*SNMP Trigger Alert*

### Properties

*None*

<h2 id="tocSsnmpdomotzsnmptriggercreation">SNMPDomotzSnmpTriggerCreation</h2>

<a id="schemasnmpdomotzsnmptriggercreation"></a>

```json
{
  "function_id": 0,
  "name": "string",
  "operands": [
    "string"
  ]
}

```

*SNMP Trigger*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|function_id|integer(int32)|true|The unique identifier of the sensor function|
|name|string|true|The name of the trigger|
|operands|[string]|true|The operands for the function|

<h2 id="tocSsubnetipdevice">SubnetIpDevice</h2>

<a id="schemasubnetipdevice"></a>

```json
{
  "authentication_status": "NO_AUTHENTICATION",
  "details": {
    "firmware_version": "string",
    "notes": "string",
    "room": "string",
    "serial": "string",
    "snmp_read_community": "string",
    "snmp_write_community": "string",
    "zone": "string"
  },
  "display_name": "string",
  "first_seen_on": "2019-08-24T14:15:22Z",
  "id": 0,
  "importance": "VITAL",
  "main_id": 0,
  "os": {
    "build": "string",
    "name": "string",
    "version": "string"
  },
  "protocol": "IP",
  "snmp_status": "CHECKING",
  "type": {
    "detected_id": 0,
    "id": 0,
    "label": "string"
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
  "open_ports": {
    "tcp": [
      0
    ],
    "udp": [
      0
    ]
  },
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
|*anonymous*|object|false|A device automatically discovered by the agent that exists in an IP subnet defined by the user.  The agent reaches the device through a Level 3 switch or similar device, so it cannot get the MAC address or other level 2 information, such as DHCP lease data|
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
  "device_id": 0,
  "id": 0,
  "last_update": "2019-08-24T14:15:22Z",
  "port": 0,
  "status": "UP"
}

```

*Information about a configured TCP Domotz Sensor*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|device_id|integer(int32)|false|The unique identifier of the device|
|id|integer(int32)|true|The ID of the TCP Domotz Sensor|
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

*TCP Domotz Sensor Data*

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

<h2 id="tocSvariablehistorysample">VariableHistorySample</h2>

<a id="schemavariablehistorysample"></a>

```json
{
  "timestamp": "2019-08-24T14:15:22Z",
  "value": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|timestamp|string(date-time)|true|The time the sample was reported to Domotz|
|value|string|true|The sample value|

<h2 id="tocSwriteinventoryfield">WriteInventoryField</h2>

<a id="schemawriteinventoryfield"></a>

```json
{
  "label": "string"
}

```

*DTO Used for creating/updating Inventory fields*

### Properties

|Name|Type|Required|Description|
|---|---|---|---|---|
|label|string|true|A detailed description of the field, for documentation|

