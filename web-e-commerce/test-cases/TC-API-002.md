**Test Case ID**: TC-API-002

**Title**: Validate that the API returns only specific activities when filtered by type

**Summary**: To verify that the /filter endpoint correctly filters results based on the type=education query parameter

**Priority**: High

### Environment

Postman Version 11.76.1
Postman Desktop Platform Version: 11.76.0 (11.76.0)

### Test Type

Functional testing.

### Preconditions

- API is accessible
- Network connectivity is stable
- Query parameter filtering is supported

### Request Details

Method: GET<br/>
Base URL: https://bored-api.appbrewery.com<br/>
Endpoint: /filter<br/>
Query params: type=education<br/>
Full URL: https://bored-api.appbrewery.com/filter?type=education<br/>
Headers: {}<br/>
Request Body: None

### Expected results

Status Code:

- 200 OK

Response Body:

```
{
  "activity": "Learn origami",
  "availability": 0.3,
  "type": "education",
  "participants": 1,
  "price": 0.2,
  "accessibility": "Minor challenges",
  "duration": "minutes",
  "kidFriendly": true,
  "link": "",
  "key": "8394738"
}
```

### Validation Points

1. Status Code Validation

- Verify response status is 200

2. Response Structure Validation

- Response should be a non-empty array
- Each item should be a valid JSON object

3. Filter Validation
   For every object in the response:

- type must equal "education"

4. Data Consistency

- No object should contain a different type value
- No null or undefined fields

5. Response Time Validation
   API response time should be < 1000 ms

### Negative Checks

- Response should not be empty
- Response should not include non-education activities
- No unexpected fields should be present
- API should not return 4xx/5xx errors under normal conditions

### Postman Test Script

```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("All activities are of type education", function () {
    const jsonData = pm.response.json();
    jsonData.forEach(item => {
        pm.expect(item.type).to.eql("education");
    });
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
