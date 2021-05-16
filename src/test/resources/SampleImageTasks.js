export const SampleImageTaskList = {
    "imageTasks": [ 
      {
        "id": 1,
        "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/3CTransverse.jpg",
        "taskQuestions" : [ {
          "id" : "PlaneQ1",
          "type" : "plane",
          "questionText" : "On which plane is the ultrasound taken?",
          "correctAnswer" : "Lateral",
          "possibleAnswers" : [ "Transverse", "Lateral" ],
          "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/3CTransverse.jpg"
        }, {
          "id" : "StructureQ1",
          "type" : "structure",
          "questionText" : "What structure is in the near field?",
          "correctAnswer" : "bone",
          "possibleAnswers" : [ "bone", "ligament", "tumor", "tendon" ],
          "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/3CTransverse.jpg",
          "followupQuestions" : [ ]

        }, {
          "id" : "ZoneQ1",
          "type" : "zone",
          "questionText" : "In what zone is this ultrasound taken?",
          "correctAnswer" : "3c",
          "possibleAnswers" : [ "1a", "1b", "2a", "2b", "2c", "3a", "3b", "3c" ],
          "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/3CTransverse.jpg",
          "followupQuestions" : [ ]

        }]
      },
      {
        "id": 2,
        "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/metacarpal15.jpg",
        "taskQuestions" : [ {
          "id" : "PlaneQ1",
          "type" : "plane",
          "questionText" : "On which plane is the ultrasound taken?",
          "correctAnswer" : "Transverse",
          "possibleAnswers" : [ "Transverse", "Lateral" ],
          "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/metacarpal15.jpg",
          "followupQuestions" : [ ]

        }, {
          "id" : "StructureQ1",
          "type" : "structure",
          "questionText" : "What structure is in the near field?",
          "correctAnswer" : "ligament",
          "possibleAnswers" : [ "bone", "ligament", "tumor", "tendon" ],
          "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/metacarpal15.jpg",
          "followupQuestions" : [ ]

        }]
      },
        {   
        "id": 3,
        "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/metacarpal15.jpg",
        "taskQuestions" : [ {
            "id" : "StructureQ1",
            "type" : "structure",
            "questionText" : "TESTING",
            "correctAnswer" : "ligament",
            "possibleAnswers" : [ "bone", "ligament", "tumor", "tendon" ],
            "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/metacarpal15.jpg",
            "followupQuestions" : [ {
            "id" : "ZoneFollow",
            "type" : "attachment",
            "questionText" : "What is this structure’s proximal attachment?",
            "correctAnswer" : "medial humeral epicondyle",
            "possibleAnswers" : [ "Medial humeral epicondyle", "Lateral humeral epicondyle", "Both the proximal metacarpus 3 and distal row of carpal bones", "Distal row of carpal bones", "proximal metacarpus 3" ],
            "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/metacarpal15.jpg",
            "followupQuestions" : [ ]
          } ]

        }]
        
      },
      
      {
        "id": 4,
        "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated2ATrans.jpg",
        "taskQuestions" : [ {
          "id" : "PlaneQ1",
          "type" : "plane",
          "questionText" : "On which plane is the ultrasound taken?",
          "correctAnswer" : "Lateral",
          "possibleAnswers" : [ "Transverse", "Lateral" ],
          "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated2ATrans.jpg"
        }, {
          "id" : "StructureQ1",
          "type" : "structure",
          "questionText" : "What structure is in the near field?",
          "correctAnswer" : "bone",
          "possibleAnswers" : [ "bone", "ligament", "tumor", "tendon" ],
          "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated2ATrans.jpg"
        }, {
          "id" : "ZoneQ1",
          "type" : "zone",
          "questionText" : "In what zone is this ultrasound taken?",
          "correctAnswer" : "3c",
          "possibleAnswers" : [ "1a", "1b", "2a", "2b", "2c", "3a", "3b", "3c" ],
          "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated2ATrans.jpg"
        } ]
      },
        
      
        { 
          "id":5,
          "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated2BTrans.jpg",
          "taskQuestions" : [ {
            "id" : "PlaneQ1",
            "type" : "plane",
            "questionText" : "On which plane is the ultrasound taken?",
            "correctAnswer" : "Lateral",
            "possibleAnswers" : [ "Transverse", "Lateral" ],
            "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated2BTrans.jpg"
          }, {
              "id": "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated2BTrans.jpg",
              "type": "structure",
              "questionText": "What is the in the far field?",
              "correctAnswer": "Suspensory ligament (branches)",
              "possibleAnswers": [
                "Superficial digital flexor tendon",
                "Deep digital flexor tendon",
                "Suspensory ligament (body)",
                "Suspensory ligament (branches)",
                "Distal check ligament (We use Accessory ligament of the deep digital flexor tendon)",
                "Metacarpus bone 3 (Third metacarpal bone)",
                "Proximal sesamoid bones",
                "P1 (First phalanx)",
                "P2 (Second phalanx)",
                "distal sesamoidean ligaments – straight and oblique",
                "Palmar annular ligament",
                "Palmar ligament",
                "Palmar vessels (medial/lateral)",
                "Palmar metacarpal vessels (medial/lateral)"
              ],
              "imageUrl": "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated2BTrans.jpg"
              
          }, {
            "id":"https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated2BTrans.jpg",
            "type": "zone",
            "questionText": "in which zone is the ultrasound taken?",
            "correctAnswer": "3A",
            "possibleAnswers": [
              "1",
              "1A",
              "1B",
              "2",
              "2A",
              "2B",
              "3",
              "3A",
              "3B",
              "3C"
            ],
            "imageUrl": "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated2BTrans.jpg",
            "followupQuestions": []
          }, {
            "id": "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated2BTrans.jpg",
            "type": "plane",
            "questionText": "On which plane is the ultrasound taken?",
            "correctAnswer": "transverse",
            "possibleAnswers": [
              "transverse",
              "longitudinal"
            ],
            "imageUrl": "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated2BTrans.jpg",
            "followupQuestions": []
          } ]
        },
        {
          
            "id":6,
            "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated1BTrans.jpg",
            "taskQuestions" : [ {
              "id" : "PlaneQ1",
              "type" : "plane",
              "questionText" : "On which plane is the ultrasound taken?",
              "correctAnswer" : "Lateral",
              "possibleAnswers" : [ "Transverse", "Lateral" ],
              "imageUrl" : "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated1BTrans.jpg"
            }, {
                "id": "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated1BTrans.jpg",
                "type": "structure",
                "questionText": "What is the in the far field?",
                "correctAnswer": "Suspensory ligament (branches)",
                "possibleAnswers": [
                  "Superficial digital flexor tendon",
                  "Deep digital flexor tendon",
                  "Suspensory ligament (body)",
                  "Suspensory ligament (branches)",
                  "Distal check ligament (We use Accessory ligament of the deep digital flexor tendon)",
                  "Metacarpus bone 3 (Third metacarpal bone)",
                  "Proximal sesamoid bones",
                  "P1 (First phalanx)",
                  "P2 (Second phalanx)",
                  "distal sesamoidean ligaments – straight and oblique",
                  "Palmar annular ligament",
                  "Palmar ligament",
                  "Palmar vessels (medial/lateral)",
                  "Palmar metacarpal vessels (medial/lateral)"
                ],
                "imageUrl": "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated1BTrans.jpg"
                
            }, {
              "id":"https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated1BTrans.jpg",
              "type": "zone",
              "questionText": "in which zone is the ultrasound taken?",
              "correctAnswer": "3A",
              "possibleAnswers": [
                "1",
                "1A",
                "1B",
                "2",
                "2A",
                "2B",
                "3",
                "3A",
                "3B",
                "3C"
              ],
              "imageUrl": "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated1BTrans.jpg",
              "followupQuestions": []
            }, {
              "id": "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated1BTrans.jpg",
              "type": "plane",
              "questionText": "On which plane is the ultrasound taken?",
              "correctAnswer": "transverse",
              "possibleAnswers": [
                "transverse",
                "longitudinal"
              ],
              "imageUrl": "https://github.com/tobydragon/PAR/raw/master/src/main/resources/static/images/Annotated1BTrans.jpg",
              "followupQuestions": []
            } ]
          }
        
      ]
    }

  export default SampleImageTaskList;
  

  