**Test Case ID**: TC-API-001

**Title**: Validate that the Random Activity API returns a successful response with all required fields

**Summary**: Verify that the /random endpoint returns a valid activity object with correct structure, data types, and HTTP status

**Priority**: High

### Environment

- Postman Version 11.76.1
- Postman Desktop Platform Version: 11.76.0 (11.76.0)

### Test Type

Functional testing.

### Preconditions

- API is accessible
- Network connectivity is stable

### Request Details

Method: GET<br/>
Base URL: https://bored-api.appbrewery.com<br/>
Endpoint: /random<br/>
Full URL: https://bored-api.appbrewery.com/random<br/>
Headers: {}<br/>
Request Body: None<br/>

### Expected results

Status Code:

- 200 OK

Response Body:

```
{
  "activity": "Learn Express.js",
  "availability": 0.25,
  "type": "education",
  "participants": 1,
  "price": 0.1,
  "accessibility": "Few to no challenges",
  "duration": "hours",
  "kidFriendly": true,
  "link": "https://expressjs.com/",
  "key": "3943506"
}
```

### Validation Points

1. Status Code Validation

- Verify response status is 200

2. Response Structure Validation

Ensure response contains all required fields:

- activity (string)
- availability (integer)
- type (string)
- participants (number)
- price (integer)
- accessibility (string)
- duration (string)
- kidFriendly (boolean)
- link (string, can be empty)
- key (string)

3. Data Type Validation

- participants ≥ 1

4. Business Logic Validation

- type should be one of:
  education, recreational, social, charity, cooking, relaxation, busywork
- key should be unique per activity

5. Response Time Validation
   API response time should be < 1000 ms

### Negative Checks

- Response should not be empty
- No unexpected fields should be present
- API should not return 4xx/5xx errors under normal conditions

### Postman Test Script

```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has required fields", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("activity");
    pm.expect(jsonData).to.have.property("type");
    pm.expect(jsonData).to.have.property("participants");
    pm.expect(jsonData).to.have.property("price");
    pm.expect(jsonData).to.have.property("key");
});

pm.test("Participants is at least 1", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.participants).to.be.at.least(1);
});
```

### Actual results

_To be filled after testing_

### Status

_To be filled after testing_

- _Pass - for a passed test_
- _Fail - for a failed test_

### Comments

_To be filled in case of additional information_
