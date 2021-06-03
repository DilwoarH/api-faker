// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    "items": [
        {
            "id": "18910-434",
            "student_id": 18910,
            "assessment_term_id": 434,
            "assessment_term_date": "2021-04-21",
            "is_estimate": 0,
            "student": [
                {
                    "id": 18910,
                    "person_id": 18910,
                    "name": "Murray, Sabrina",
                    "surname": "Murray",
                    "middle_name": null,
                    "forename": "Sabrina",
                    "year_group_id": 5,
                    "year_group_name": "Year 11",
                    "reg_group_id": 37,
                    "reg_group_name": "11 Brunel",
                    "religion_id": 1,
                    "religion_name": "Christian",
                    "ethnicity_id": 31,
                    "ethnicity_name": "Black - Congolese",
                    "ethnicity_code": "BCON",
                    "first_language_id": 30,
                    "language_first_name": "Lingala",
                    "language_first_code": "LIN",
                    "sen_provision": null,
                    "date_of_birth": "2003-11-10",
                    "admission_number": "355800",
                    "admission_date": "2013-06-12",
                    "exam_number": null,
                    "gender": "F",
                    "is_pupil_premium": false,
                    "is_fsm_eligible": false,
                    "fsm_start_date": null,
                    "fsm_end_date": null,
                    "is_eal": false,
                    "school_groups_count_by_effective_date": 22,
                    "school_groups_count": 130,
                    "leaving_date": null,
                    "created_at": "2016-08-30 03:11:20",
                    "updated_at": "2021-04-14 04:02:06",
                    "_links": {
                        "img_profile": {
                            "href": null
                        }
                    }
                }
            ],
            "course_progress": [
                {
                    "id": 2,
                    "name": "Drama (Dr)",
                    "short_name": "Dr",
                    "prediction": {
                        "result": "6",
                        "value_add": 1.64,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "3",
                        "value_add": -1.142,
                        "progress_dot": 1,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.64,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 3,
                    "name": "English (En)",
                    "short_name": "En",
                    "prediction": {
                        "result": "4+",
                        "value_add": -0.39,
                        "progress_dot": 1,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "4",
                        "value_add": -0.176,
                        "progress_dot": 2,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.36,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 5,
                    "name": "History (Hi)",
                    "short_name": "Hi",
                    "prediction": {
                        "result": "5-",
                        "value_add": 1,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "4-",
                        "value_add": 0.375,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 2.25,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 7,
                    "name": "Maths (Ma)",
                    "short_name": "Ma",
                    "prediction": {
                        "result": "3",
                        "value_add": -0.99,
                        "progress_dot": 1,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "current": {
                        "result": "2",
                        "value_add": -1.7905,
                        "progress_dot": 1,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 2.01,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 11,
                    "name": "Religious Study SC (Rs)",
                    "short_name": "Rs|SC",
                    "prediction": {
                        "result": "8",
                        "value_add": 3.64,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "8",
                        "value_add": 3.64,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.64,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 13,
                    "name": "Business Studies (Bs)",
                    "short_name": "Bs",
                    "prediction": {
                        "result": "5",
                        "value_add": 0.64,
                        "progress_dot": 3,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "2-",
                        "value_add": -2.174,
                        "progress_dot": 1,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.64,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 17,
                    "name": "Spanish (Sp)",
                    "short_name": "Sp",
                    "prediction": {
                        "result": "6-",
                        "value_add": 1.9,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "5-",
                        "value_add": 1.208,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 2.15,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 35,
                    "name": "English Lit (En)",
                    "short_name": "En|Lit",
                    "prediction": {
                        "result": "5",
                        "value_add": 0.36,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "current": {
                        "result": "5-",
                        "value_add": 0.574,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.36,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 43,
                    "name": "Chemistry Db Sci (Ch)",
                    "short_name": "Ch|Db Sci",
                    "prediction": {
                        "result": "4",
                        "value_add": -0.02,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "2",
                        "value_add": -1.319,
                        "progress_dot": 1,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.98,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 54,
                    "name": "Physics Db Sci (Py)",
                    "short_name": "Py|Db Sci",
                    "prediction": {
                        "result": "4",
                        "value_add": -0.02,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "2",
                        "value_add": -1.319,
                        "progress_dot": 1,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.98,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 55,
                    "name": "Biology Db  Sci (Bi)",
                    "short_name": "Bi|Db  Sci",
                    "prediction": {
                        "result": "4",
                        "value_add": -0.02,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "2",
                        "value_add": -1.319,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.98,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                }
            ],
            "progress_8_scores": {
                "current": {
                    "student_progress_8_id": 14127,
                    "student_id": 18910,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "current",
                    "is_valid": 1,
                    "capped": 34,
                    "expected_points": 41.93,
                    "value_added": -7.93,
                    "attainment8": 3.4,
                    "attainment8_dot_type": null,
                    "progress8": -0.793,
                    "progress8_dot_type": 1,
                    "ebacc_elements_capped": 11,
                    "ebacc_elements_expected_points": 11.61,
                    "ebacc_elements_value_added": -0.61,
                    "ebacc_elements_attainment8": 3.66667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": -0.203333,
                    "ebacc_elements_progress8_dot_type": 2,
                    "open_elements_capped": 9.5,
                    "open_elements_expected_points": 13.08,
                    "open_elements_value_added": -3.58,
                    "open_elements_attainment8": 3.16667,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": -1.19333,
                    "open_elements_progress8_dot_type": 1,
                    "is_estimate": 0
                },
                "prediction": {
                    "student_progress_8_id": 14128,
                    "student_id": 18910,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "prediction",
                    "is_valid": 1,
                    "capped": 45.75,
                    "expected_points": 41.93,
                    "value_added": 3.82,
                    "attainment8": 4.575,
                    "attainment8_dot_type": null,
                    "progress8": 0.382,
                    "progress8_dot_type": 3,
                    "ebacc_elements_capped": 14.5,
                    "ebacc_elements_expected_points": 11.61,
                    "ebacc_elements_value_added": 2.89,
                    "ebacc_elements_attainment8": 4.83333,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 0.963333,
                    "ebacc_elements_progress8_dot_type": 3,
                    "open_elements_capped": 15.25,
                    "open_elements_expected_points": 13.08,
                    "open_elements_value_added": 2.17,
                    "open_elements_attainment8": 5.08333,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 0.723333,
                    "open_elements_progress8_dot_type": 3,
                    "is_estimate": 0
                },
                "target": {
                    "student_progress_8_id": 14129,
                    "student_id": 18910,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "target",
                    "is_valid": 1,
                    "capped": 60,
                    "expected_points": 41.93,
                    "value_added": 18.07,
                    "attainment8": 6,
                    "attainment8_dot_type": null,
                    "progress8": 1.807,
                    "progress8_dot_type": 4,
                    "ebacc_elements_capped": 18,
                    "ebacc_elements_expected_points": 11.61,
                    "ebacc_elements_value_added": 6.39,
                    "ebacc_elements_attainment8": 6,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 2.13,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 18,
                    "open_elements_expected_points": 13.08,
                    "open_elements_value_added": 4.92,
                    "open_elements_attainment8": 6,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 1.64,
                    "open_elements_progress8_dot_type": 4,
                    "is_estimate": 0
                }
            }
        },
        {
            "id": "18572-434",
            "student_id": 18572,
            "assessment_term_id": 434,
            "assessment_term_date": "2021-04-21",
            "is_estimate": 0,
            "student": [
                {
                    "id": 18572,
                    "person_id": 18572,
                    "name": "Hall, Gavin",
                    "surname": "Hall",
                    "middle_name": null,
                    "forename": "Gavin",
                    "year_group_id": 5,
                    "year_group_name": "Year 11",
                    "reg_group_id": 34,
                    "reg_group_name": "11 Bannister",
                    "religion_id": null,
                    "religion_name": null,
                    "ethnicity_id": null,
                    "ethnicity_name": null,
                    "ethnicity_code": null,
                    "first_language_id": 0,
                    "language_first_name": null,
                    "language_first_code": null,
                    "sen_provision": null,
                    "date_of_birth": "2006-12-31",
                    "admission_number": "711864",
                    "admission_date": "2009-06-07",
                    "exam_number": "293098",
                    "gender": "M",
                    "is_pupil_premium": false,
                    "is_fsm_eligible": true,
                    "fsm_start_date": "2019-09-03",
                    "fsm_end_date": null,
                    "is_eal": false,
                    "school_groups_count_by_effective_date": 24,
                    "school_groups_count": 166,
                    "leaving_date": null,
                    "created_at": "2016-08-30 03:11:18",
                    "updated_at": "2021-04-14 04:02:05",
                    "_links": {
                        "img_profile": {
                            "href": null
                        }
                    }
                }
            ],
            "course_progress": [
                {
                    "id": 3,
                    "name": "English (En)",
                    "short_name": "En",
                    "prediction": {
                        "result": "4",
                        "value_add": -2.96,
                        "progress_dot": 1,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "3-",
                        "value_add": -3.514,
                        "progress_dot": 1,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "8",
                        "value_add": 1.04,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 4,
                    "name": "Geography (Ge)",
                    "short_name": "Ge",
                    "prediction": {
                        "result": "4",
                        "value_add": -2.84,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "4+",
                        "value_add": -1.906,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "8",
                        "value_add": 1.16,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 7,
                    "name": "Maths (Ma)",
                    "short_name": "Ma",
                    "prediction": {
                        "result": "6",
                        "value_add": -1.14,
                        "progress_dot": 1,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "current": {
                        "result": "6-",
                        "value_add": -1.033,
                        "progress_dot": 1,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "target": {
                        "result": "8",
                        "value_add": 0.86,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 9,
                    "name": "Pe And Dance (Pe)",
                    "short_name": "Pe",
                    "prediction": {
                        "result": "6",
                        "value_add": -0.76,
                        "progress_dot": 1,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "5",
                        "value_add": -1.4896,
                        "progress_dot": 1,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "8",
                        "value_add": 1.24,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 11,
                    "name": "Religious Study SC (Rs)",
                    "short_name": "Rs|SC",
                    "prediction": {
                        "result": "8",
                        "value_add": 1.24,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "8",
                        "value_add": 1.24,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "8",
                        "value_add": 1.24,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 17,
                    "name": "Spanish (Sp)",
                    "short_name": "Sp",
                    "prediction": {
                        "result": "4+",
                        "value_add": -1.81,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "3+",
                        "value_add": -2.3252,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "8",
                        "value_add": 1.94,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 19,
                    "name": "Chemistry (Ch)",
                    "short_name": "Ch",
                    "prediction": {
                        "result": "U",
                        "value_add": -7.03,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "U",
                        "value_add": -6.8594,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "9",
                        "value_add": 1.97,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 24,
                    "name": "Biology (Bi)",
                    "short_name": "Bi",
                    "prediction": {
                        "result": "5+",
                        "value_add": -1.78,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "4",
                        "value_add": -2.6785,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "9",
                        "value_add": 1.97,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 26,
                    "name": "Physics (Py)",
                    "short_name": "Py",
                    "prediction": {
                        "result": "5+",
                        "value_add": -1.78,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "4",
                        "value_add": -2.6785,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "9",
                        "value_add": 1.97,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 35,
                    "name": "English Lit (En)",
                    "short_name": "En|Lit",
                    "prediction": {
                        "result": "5",
                        "value_add": -1.96,
                        "progress_dot": 1,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "current": {
                        "result": "4",
                        "value_add": -2.264,
                        "progress_dot": 1,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "target": {
                        "result": "8",
                        "value_add": 1.04,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 91,
                    "name": "Design & Technology (Dt)",
                    "short_name": "Dt",
                    "prediction": {
                        "result": "4",
                        "value_add": -2.76,
                        "progress_dot": 1,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "3-",
                        "value_add": -3.4016,
                        "progress_dot": 1,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "8",
                        "value_add": 1.24,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                }
            ],
            "progress_8_scores": {
                "current": {
                    "student_progress_8_id": 14130,
                    "student_id": 18572,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "current",
                    "is_valid": 1,
                    "capped": 42.75,
                    "expected_points": 69.67,
                    "value_added": -26.92,
                    "attainment8": 4.275,
                    "attainment8_dot_type": null,
                    "progress8": -2.692,
                    "progress8_dot_type": 1,
                    "ebacc_elements_capped": 12.25,
                    "ebacc_elements_expected_points": 21.2,
                    "ebacc_elements_value_added": -8.95,
                    "ebacc_elements_attainment8": 4.08333,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": -2.98333,
                    "ebacc_elements_progress8_dot_type": 1,
                    "open_elements_capped": 11,
                    "open_elements_expected_points": 20.28,
                    "open_elements_value_added": -9.28,
                    "open_elements_attainment8": 3.66667,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": -3.09333,
                    "open_elements_progress8_dot_type": 1,
                    "is_estimate": 0
                },
                "prediction": {
                    "student_progress_8_id": 14131,
                    "student_id": 18572,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "prediction",
                    "is_valid": 1,
                    "capped": 50.75,
                    "expected_points": 69.67,
                    "value_added": -18.92,
                    "attainment8": 5.075,
                    "attainment8_dot_type": null,
                    "progress8": -1.892,
                    "progress8_dot_type": 1,
                    "ebacc_elements_capped": 14.75,
                    "ebacc_elements_expected_points": 21.2,
                    "ebacc_elements_value_added": -6.45,
                    "ebacc_elements_attainment8": 4.91667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": -2.15,
                    "ebacc_elements_progress8_dot_type": 1,
                    "open_elements_capped": 14,
                    "open_elements_expected_points": 20.28,
                    "open_elements_value_added": -6.28,
                    "open_elements_attainment8": 4.66667,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": -2.09333,
                    "open_elements_progress8_dot_type": 1,
                    "is_estimate": 0
                },
                "target": {
                    "student_progress_8_id": 14132,
                    "student_id": 18572,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "target",
                    "is_valid": 1,
                    "capped": 83,
                    "expected_points": 69.67,
                    "value_added": 13.33,
                    "attainment8": 8.3,
                    "attainment8_dot_type": null,
                    "progress8": 1.333,
                    "progress8_dot_type": 4,
                    "ebacc_elements_capped": 27,
                    "ebacc_elements_expected_points": 21.2,
                    "ebacc_elements_value_added": 5.8,
                    "ebacc_elements_attainment8": 9,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 1.93333,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 24,
                    "open_elements_expected_points": 20.28,
                    "open_elements_value_added": 3.72,
                    "open_elements_attainment8": 8,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 1.24,
                    "open_elements_progress8_dot_type": 4,
                    "is_estimate": 0
                }
            }
        },
        {
            "id": "18700-434",
            "student_id": 18700,
            "assessment_term_id": 434,
            "assessment_term_date": "2021-04-21",
            "is_estimate": 0,
            "student": [
                {
                    "id": 18700,
                    "person_id": 18700,
                    "name": "Ross, Dale",
                    "surname": "Ross",
                    "middle_name": null,
                    "forename": "Dale",
                    "year_group_id": 5,
                    "year_group_name": "Year 11",
                    "reg_group_id": 34,
                    "reg_group_name": "11 Bannister",
                    "religion_id": 7,
                    "religion_name": "Other Religion",
                    "ethnicity_id": 6,
                    "ethnicity_name": "Turkish",
                    "ethnicity_code": "WTUK",
                    "first_language_id": 6,
                    "language_first_name": "Turkish",
                    "language_first_code": "TUR",
                    "sen_provision": "N",
                    "date_of_birth": "1995-07-28",
                    "admission_number": "838648",
                    "admission_date": "2007-09-04",
                    "exam_number": "461516",
                    "gender": "M",
                    "is_pupil_premium": false,
                    "is_fsm_eligible": true,
                    "fsm_start_date": "2020-09-09",
                    "fsm_end_date": null,
                    "is_eal": false,
                    "school_groups_count_by_effective_date": 25,
                    "school_groups_count": 135,
                    "leaving_date": null,
                    "created_at": "2016-08-30 03:11:20",
                    "updated_at": "2021-04-14 04:01:53",
                    "_links": {
                        "img_profile": {
                            "href": null
                        }
                    }
                }
            ],
            "course_progress": [
                {
                    "id": 3,
                    "name": "English (En)",
                    "short_name": "En",
                    "prediction": {
                        "result": "4-",
                        "value_add": 0.33,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "3+",
                        "value_add": 0.172,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.58,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 7,
                    "name": "Maths (Ma)",
                    "short_name": "Ma",
                    "prediction": {
                        "result": "2",
                        "value_add": -0.46,
                        "progress_dot": 1,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "current": {
                        "result": "1+",
                        "value_add": -1.087,
                        "progress_dot": 1,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "target": {
                        "result": "4",
                        "value_add": 1.54,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 17,
                    "name": "Spanish (Sp)",
                    "short_name": "Sp",
                    "prediction": {
                        "result": "4+",
                        "value_add": 0.98,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "3-",
                        "value_add": -0.2584,
                        "progress_dot": 2,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "4",
                        "value_add": 0.73,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 35,
                    "name": "English Lit (En)",
                    "short_name": "En|Lit",
                    "prediction": {
                        "result": "4",
                        "value_add": 0.58,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "current": {
                        "result": "3-",
                        "value_add": -0.328,
                        "progress_dot": 2,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.58,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 43,
                    "name": "Chemistry Db Sci (Ch)",
                    "short_name": "Ch|Db Sci",
                    "prediction": {
                        "result": "3",
                        "value_add": 0.22,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "2",
                        "value_add": -0.641,
                        "progress_dot": 1,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "4",
                        "value_add": 1.22,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 54,
                    "name": "Physics Db Sci (Py)",
                    "short_name": "Py|Db Sci",
                    "prediction": {
                        "result": "3",
                        "value_add": 0.22,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "2",
                        "value_add": -0.641,
                        "progress_dot": 1,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "4",
                        "value_add": 1.22,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 55,
                    "name": "Biology Db  Sci (Bi)",
                    "short_name": "Bi|Db  Sci",
                    "prediction": {
                        "result": "3",
                        "value_add": 0.22,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "2",
                        "value_add": -0.641,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "4",
                        "value_add": 1.22,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 77,
                    "name": "Health & Social Care BTEC (Oh)",
                    "short_name": "Oh",
                    "prediction": {
                        "result": "P2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "P2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    }
                },
                {
                    "id": 81,
                    "name": "Graphic Design (Og)",
                    "short_name": "Og",
                    "prediction": {
                        "result": "P2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "P2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    }
                },
                {
                    "id": 84,
                    "name": "Travel & Tourism (Ot)",
                    "short_name": "Ot",
                    "prediction": {
                        "result": "P2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "P2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    }
                }
            ],
            "progress_8_scores": {
                "current": {
                    "student_progress_8_id": 14133,
                    "student_id": 18700,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "current",
                    "is_valid": 1,
                    "capped": 27.75,
                    "expected_points": 28.97,
                    "value_added": -1.22,
                    "attainment8": 2.775,
                    "attainment8_dot_type": null,
                    "progress8": -0.122,
                    "progress8_dot_type": 2,
                    "ebacc_elements_capped": 6.75,
                    "ebacc_elements_expected_points": 7.51,
                    "ebacc_elements_value_added": -0.76,
                    "ebacc_elements_attainment8": 2.25,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": -0.253333,
                    "ebacc_elements_progress8_dot_type": 2,
                    "open_elements_capped": 12,
                    "open_elements_expected_points": 9.71,
                    "open_elements_value_added": 2.29,
                    "open_elements_attainment8": 4,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 0.763333,
                    "open_elements_progress8_dot_type": 3,
                    "is_estimate": 0
                },
                "prediction": {
                    "student_progress_8_id": 14134,
                    "student_id": 18700,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "prediction",
                    "is_valid": 1,
                    "capped": 34,
                    "expected_points": 28.97,
                    "value_added": 5.03,
                    "attainment8": 3.4,
                    "attainment8_dot_type": null,
                    "progress8": 0.503,
                    "progress8_dot_type": 3,
                    "ebacc_elements_capped": 10.25,
                    "ebacc_elements_expected_points": 7.51,
                    "ebacc_elements_value_added": 2.74,
                    "ebacc_elements_attainment8": 3.41667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 0.913333,
                    "ebacc_elements_progress8_dot_type": 3,
                    "open_elements_capped": 11.75,
                    "open_elements_expected_points": 9.71,
                    "open_elements_value_added": 2.04,
                    "open_elements_attainment8": 3.91667,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 0.68,
                    "open_elements_progress8_dot_type": 3,
                    "is_estimate": 0
                },
                "target": {
                    "student_progress_8_id": 14135,
                    "student_id": 18700,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "target",
                    "is_valid": 1,
                    "capped": 31,
                    "expected_points": 28.97,
                    "value_added": 2.03,
                    "attainment8": 3.1,
                    "attainment8_dot_type": null,
                    "progress8": 0.203,
                    "progress8_dot_type": 3,
                    "ebacc_elements_capped": 8,
                    "ebacc_elements_expected_points": 7.51,
                    "ebacc_elements_value_added": 0.49,
                    "ebacc_elements_attainment8": 2.66667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 0.163333,
                    "ebacc_elements_progress8_dot_type": 3,
                    "open_elements_capped": 5,
                    "open_elements_expected_points": 9.71,
                    "open_elements_value_added": -4.71,
                    "open_elements_attainment8": 1.66667,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": -1.57,
                    "open_elements_progress8_dot_type": 1,
                    "is_estimate": 0
                }
            }
        },
        {
            "id": "18676-434",
            "student_id": 18676,
            "assessment_term_id": 434,
            "assessment_term_date": "2021-04-21",
            "is_estimate": 0,
            "student": [
                {
                    "id": 18676,
                    "person_id": 18676,
                    "name": "Ross, Maisie",
                    "surname": "Ross",
                    "middle_name": null,
                    "forename": "Maisie",
                    "year_group_id": 5,
                    "year_group_name": "Year 11",
                    "reg_group_id": 38,
                    "reg_group_name": "11 Bell",
                    "religion_id": 1,
                    "religion_name": "Christian",
                    "ethnicity_id": 11,
                    "ethnicity_name": "White and Black African",
                    "ethnicity_code": "MWBA",
                    "first_language_id": 2,
                    "language_first_name": "Igbo",
                    "language_first_code": "IGB",
                    "sen_provision": null,
                    "date_of_birth": "2000-03-18",
                    "admission_number": "631735",
                    "admission_date": "2011-08-13",
                    "exam_number": "417045",
                    "gender": "F",
                    "is_pupil_premium": false,
                    "is_fsm_eligible": false,
                    "fsm_start_date": null,
                    "fsm_end_date": null,
                    "is_eal": true,
                    "school_groups_count_by_effective_date": 22,
                    "school_groups_count": 130,
                    "leaving_date": null,
                    "created_at": "2016-08-30 03:11:19",
                    "updated_at": "2021-04-14 04:02:00",
                    "_links": {
                        "img_profile": {
                            "href": null
                        }
                    }
                }
            ],
            "course_progress": [
                {
                    "id": 3,
                    "name": "English (En)",
                    "short_name": "En",
                    "prediction": {
                        "result": "6+",
                        "value_add": 0.7,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "6-",
                        "value_add": 0.755,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.45,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 5,
                    "name": "History (Hi)",
                    "short_name": "Hi",
                    "prediction": {
                        "result": "6+",
                        "value_add": 1.3,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "5+",
                        "value_add": 0.795,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 2.05,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 7,
                    "name": "Maths (Ma)",
                    "short_name": "Ma",
                    "prediction": {
                        "result": "5",
                        "value_add": -0.08,
                        "progress_dot": 2,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "current": {
                        "result": "5-",
                        "value_add": -0.076,
                        "progress_dot": 2,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.92,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 11,
                    "name": "Religious Study SC (Rs)",
                    "short_name": "Rs|SC",
                    "prediction": {
                        "result": "9",
                        "value_add": 3.77,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "9",
                        "value_add": 3.77,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.77,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 14,
                    "name": "Food Tec (Ft)",
                    "short_name": "Ft",
                    "prediction": {
                        "result": "8",
                        "value_add": 2.77,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "7+",
                        "value_add": 2.6476,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.77,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 17,
                    "name": "Spanish (Sp)",
                    "short_name": "Sp",
                    "prediction": {
                        "result": "5",
                        "value_add": 0.51,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "4",
                        "value_add": -0.1308,
                        "progress_dot": 2,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.51,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 21,
                    "name": "Economics (Ec)",
                    "short_name": "Ec",
                    "prediction": {
                        "result": "4",
                        "value_add": -1.23,
                        "progress_dot": 1,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "4-",
                        "value_add": -1.0616,
                        "progress_dot": 1,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.77,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 35,
                    "name": "English Lit (En)",
                    "short_name": "En|Lit",
                    "prediction": {
                        "result": "7-",
                        "value_add": 1.2,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "current": {
                        "result": "5+",
                        "value_add": 0.255,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.45,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 43,
                    "name": "Chemistry Db Sci (Ch)",
                    "short_name": "Ch|Db Sci",
                    "prediction": {
                        "result": "6",
                        "value_add": 1.43,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "5",
                        "value_add": 0.6835,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.93,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 54,
                    "name": "Physics Db Sci (Py)",
                    "short_name": "Py|Db Sci",
                    "prediction": {
                        "result": "6",
                        "value_add": 1.43,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "5",
                        "value_add": 0.6835,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.93,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 55,
                    "name": "Biology Db  Sci (Bi)",
                    "short_name": "Bi|Db  Sci",
                    "prediction": {
                        "result": "6",
                        "value_add": 1.43,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "5",
                        "value_add": 0.6835,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.93,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                }
            ],
            "progress_8_scores": {
                "current": {
                    "student_progress_8_id": 14136,
                    "student_id": 18676,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "current",
                    "is_valid": 1,
                    "capped": 53.75,
                    "expected_points": 52.05,
                    "value_added": 1.7,
                    "attainment8": 5.375,
                    "attainment8_dot_type": null,
                    "progress8": 0.17,
                    "progress8_dot_type": 3,
                    "ebacc_elements_capped": 16.25,
                    "ebacc_elements_expected_points": 15.11,
                    "ebacc_elements_value_added": 1.14,
                    "ebacc_elements_attainment8": 5.41667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 0.38,
                    "ebacc_elements_progress8_dot_type": 3,
                    "open_elements_capped": 16.5,
                    "open_elements_expected_points": 15.69,
                    "open_elements_value_added": 0.81,
                    "open_elements_attainment8": 5.5,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 0.27,
                    "open_elements_progress8_dot_type": 3,
                    "is_estimate": 0
                },
                "prediction": {
                    "student_progress_8_id": 14137,
                    "student_id": 18676,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "prediction",
                    "is_valid": 1,
                    "capped": 62,
                    "expected_points": 52.05,
                    "value_added": 9.95,
                    "attainment8": 6.2,
                    "attainment8_dot_type": null,
                    "progress8": 0.995,
                    "progress8_dot_type": 3,
                    "ebacc_elements_capped": 19.25,
                    "ebacc_elements_expected_points": 15.11,
                    "ebacc_elements_value_added": 4.14,
                    "ebacc_elements_attainment8": 6.41667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 1.38,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 19.25,
                    "open_elements_expected_points": 15.69,
                    "open_elements_value_added": 3.56,
                    "open_elements_attainment8": 6.41667,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 1.18667,
                    "open_elements_progress8_dot_type": 4,
                    "is_estimate": 0
                },
                "target": {
                    "student_progress_8_id": 14138,
                    "student_id": 18676,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "target",
                    "is_valid": 1,
                    "capped": 69,
                    "expected_points": 52.05,
                    "value_added": 16.95,
                    "attainment8": 6.9,
                    "attainment8_dot_type": null,
                    "progress8": 1.695,
                    "progress8_dot_type": 4,
                    "ebacc_elements_capped": 20,
                    "ebacc_elements_expected_points": 15.11,
                    "ebacc_elements_value_added": 4.89,
                    "ebacc_elements_attainment8": 6.66667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 1.63,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 21,
                    "open_elements_expected_points": 15.69,
                    "open_elements_value_added": 5.31,
                    "open_elements_attainment8": 7,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 1.77,
                    "open_elements_progress8_dot_type": 4,
                    "is_estimate": 0
                }
            }
        },
        {
            "id": "18924-434",
            "student_id": 18924,
            "assessment_term_id": 434,
            "assessment_term_date": "2021-04-21",
            "is_estimate": 0,
            "student": [
                {
                    "id": 18924,
                    "person_id": 18924,
                    "name": "Lewis, Helena",
                    "surname": "Lewis",
                    "middle_name": null,
                    "forename": "Helena",
                    "year_group_id": 5,
                    "year_group_name": "Year 11",
                    "reg_group_id": 41,
                    "reg_group_name": "11 Moore",
                    "religion_id": 2,
                    "religion_name": "Muslim",
                    "ethnicity_id": 6,
                    "ethnicity_name": "Turkish",
                    "ethnicity_code": "WTUK",
                    "first_language_id": 6,
                    "language_first_name": "Turkish",
                    "language_first_code": "TUR",
                    "sen_provision": null,
                    "date_of_birth": "2000-10-13",
                    "admission_number": "312866",
                    "admission_date": "2016-12-16",
                    "exam_number": null,
                    "gender": "F",
                    "is_pupil_premium": false,
                    "is_fsm_eligible": true,
                    "fsm_start_date": "2020-12-17",
                    "fsm_end_date": null,
                    "is_eal": false,
                    "school_groups_count_by_effective_date": 25,
                    "school_groups_count": 145,
                    "leaving_date": null,
                    "created_at": "2016-08-30 03:11:21",
                    "updated_at": "2021-04-14 04:02:07",
                    "_links": {
                        "img_profile": {
                            "href": null
                        }
                    }
                }
            ],
            "course_progress": [
                {
                    "id": 1,
                    "name": "Art (Ar)",
                    "short_name": "Ar",
                    "prediction": {
                        "result": "6-",
                        "value_add": 1.39,
                        "progress_dot": 3,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "5+",
                        "value_add": 1.1952,
                        "progress_dot": 3,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.64,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 3,
                    "name": "English (En)",
                    "short_name": "En",
                    "prediction": {
                        "result": "5+",
                        "value_add": 0.61,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "5",
                        "value_add": 0.824,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.36,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 4,
                    "name": "Geography (Ge)",
                    "short_name": "Ge",
                    "prediction": {
                        "result": "5+",
                        "value_add": 1.5,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "5",
                        "value_add": 1.625,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 2.25,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 7,
                    "name": "Maths (Ma)",
                    "short_name": "Ma",
                    "prediction": {
                        "result": "5",
                        "value_add": 1.01,
                        "progress_dot": 3,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "current": {
                        "result": "4",
                        "value_add": 0.2095,
                        "progress_dot": 3,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 2.01,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 10,
                    "name": "Psychology (Ps)",
                    "short_name": "Ps",
                    "prediction": {
                        "result": "6",
                        "value_add": 1.64,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "5+",
                        "value_add": 1.5004,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.64,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 11,
                    "name": "Religious Study SC (Rs)",
                    "short_name": "Rs|SC",
                    "prediction": {
                        "result": "9",
                        "value_add": 4.64,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "9",
                        "value_add": 4.64,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.64,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 17,
                    "name": "Spanish (Sp)",
                    "short_name": "Sp",
                    "prediction": {
                        "result": "6",
                        "value_add": 2.15,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "6",
                        "value_add": 2.458,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 2.15,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 35,
                    "name": "English Lit (En)",
                    "short_name": "En|Lit",
                    "prediction": {
                        "result": "6",
                        "value_add": 1.36,
                        "progress_dot": 4,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "current": {
                        "result": "5+",
                        "value_add": 1.074,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.36,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 43,
                    "name": "Chemistry Db Sci (Ch)",
                    "short_name": "Ch|Db Sci",
                    "prediction": {
                        "result": "7",
                        "value_add": 2.98,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "5",
                        "value_add": 1.681,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.98,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 51,
                    "name": "Turkish GCSE (Tu)",
                    "short_name": "Tu|GCSE",
                    "target": {
                        "result": "6",
                        "value_add": 2.15,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 54,
                    "name": "Physics Db Sci (Py)",
                    "short_name": "Py|Db Sci",
                    "prediction": {
                        "result": "7",
                        "value_add": 2.98,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "5",
                        "value_add": 1.681,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.98,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 55,
                    "name": "Biology Db  Sci (Bi)",
                    "short_name": "Bi|Db  Sci",
                    "prediction": {
                        "result": "7",
                        "value_add": 2.98,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "5",
                        "value_add": 1.681,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.98,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                }
            ],
            "progress_8_scores": {
                "current": {
                    "student_progress_8_id": 14139,
                    "student_id": 18924,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "current",
                    "is_valid": 1,
                    "capped": 51,
                    "expected_points": 41.93,
                    "value_added": 9.07,
                    "attainment8": 5.1,
                    "attainment8_dot_type": null,
                    "progress8": 0.907,
                    "progress8_dot_type": 3,
                    "ebacc_elements_capped": 17,
                    "ebacc_elements_expected_points": 11.61,
                    "ebacc_elements_value_added": 5.39,
                    "ebacc_elements_attainment8": 5.66667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 1.79667,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 15.5,
                    "open_elements_expected_points": 13.08,
                    "open_elements_value_added": 2.42,
                    "open_elements_attainment8": 5.16667,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 0.806667,
                    "open_elements_progress8_dot_type": 3,
                    "is_estimate": 0
                },
                "prediction": {
                    "student_progress_8_id": 14140,
                    "student_id": 18924,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "prediction",
                    "is_valid": 1,
                    "capped": 59,
                    "expected_points": 41.93,
                    "value_added": 17.07,
                    "attainment8": 5.9,
                    "attainment8_dot_type": null,
                    "progress8": 1.707,
                    "progress8_dot_type": 4,
                    "ebacc_elements_capped": 20,
                    "ebacc_elements_expected_points": 11.61,
                    "ebacc_elements_value_added": 8.39,
                    "ebacc_elements_attainment8": 6.66667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 2.79667,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 17,
                    "open_elements_expected_points": 13.08,
                    "open_elements_value_added": 3.92,
                    "open_elements_attainment8": 5.66667,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 1.30667,
                    "open_elements_progress8_dot_type": 4,
                    "is_estimate": 0
                },
                "target": {
                    "student_progress_8_id": 14141,
                    "student_id": 18924,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "target",
                    "is_valid": 1,
                    "capped": 60,
                    "expected_points": 41.93,
                    "value_added": 18.07,
                    "attainment8": 6,
                    "attainment8_dot_type": null,
                    "progress8": 1.807,
                    "progress8_dot_type": 4,
                    "ebacc_elements_capped": 18,
                    "ebacc_elements_expected_points": 11.61,
                    "ebacc_elements_value_added": 6.39,
                    "ebacc_elements_attainment8": 6,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 2.13,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 18,
                    "open_elements_expected_points": 13.08,
                    "open_elements_value_added": 4.92,
                    "open_elements_attainment8": 6,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 1.64,
                    "open_elements_progress8_dot_type": 4,
                    "is_estimate": 0
                }
            }
        },
        {
            "id": "19928-434",
            "student_id": 19928,
            "assessment_term_id": 434,
            "assessment_term_date": "2021-04-21",
            "is_estimate": 0,
            "student": [
                {
                    "id": 19928,
                    "person_id": 19928,
                    "name": "Cooper, Owen",
                    "surname": "Cooper",
                    "middle_name": null,
                    "forename": "Owen",
                    "year_group_id": 5,
                    "year_group_name": "Year 11",
                    "reg_group_id": 38,
                    "reg_group_name": "11 Bell",
                    "religion_id": 3,
                    "religion_name": "No Religion",
                    "ethnicity_id": 4,
                    "ethnicity_name": "White - English",
                    "ethnicity_code": "WENG",
                    "first_language_id": 1,
                    "language_first_name": "English",
                    "language_first_code": "ENG",
                    "sen_provision": "N",
                    "date_of_birth": "2007-06-20",
                    "admission_number": "920190",
                    "admission_date": "2008-06-17",
                    "exam_number": "275847",
                    "gender": "M",
                    "is_pupil_premium": false,
                    "is_fsm_eligible": false,
                    "fsm_start_date": null,
                    "fsm_end_date": null,
                    "is_eal": false,
                    "school_groups_count_by_effective_date": 21,
                    "school_groups_count": 138,
                    "leaving_date": null,
                    "created_at": "2017-01-03 01:32:31",
                    "updated_at": "2021-04-14 04:01:54",
                    "_links": {
                        "img_profile": {
                            "href": null
                        }
                    }
                }
            ],
            "course_progress": [
                {
                    "id": 2,
                    "name": "Drama (Dr)",
                    "short_name": "Dr",
                    "prediction": {
                        "result": "6-",
                        "value_add": 0.52,
                        "progress_dot": 3,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "6-",
                        "value_add": 0.7815,
                        "progress_dot": 3,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.77,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 3,
                    "name": "English (En)",
                    "short_name": "En",
                    "prediction": {
                        "result": "4",
                        "value_add": -1.55,
                        "progress_dot": 1,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "3",
                        "value_add": -1.995,
                        "progress_dot": 1,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.45,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 5,
                    "name": "History (Hi)",
                    "short_name": "Hi",
                    "prediction": {
                        "result": "6+",
                        "value_add": 1.3,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "5+",
                        "value_add": 0.795,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 2.05,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 7,
                    "name": "Maths (Ma)",
                    "short_name": "Ma",
                    "prediction": {
                        "result": "4",
                        "value_add": -1.08,
                        "progress_dot": 1,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "current": {
                        "result": "4-",
                        "value_add": -1.076,
                        "progress_dot": 1,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.92,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 11,
                    "name": "Religious Study SC (Rs)",
                    "short_name": "Rs|SC",
                    "prediction": {
                        "result": "8",
                        "value_add": 2.77,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "8",
                        "value_add": 2.77,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.77,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 17,
                    "name": "Spanish (Sp)",
                    "short_name": "Sp",
                    "prediction": {
                        "result": "4",
                        "value_add": -0.49,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "3",
                        "value_add": -1.1308,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.51,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 35,
                    "name": "English Lit (En)",
                    "short_name": "En|Lit",
                    "prediction": {
                        "result": "6",
                        "value_add": 0.45,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "current": {
                        "result": "5",
                        "value_add": 0.005,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.45,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 43,
                    "name": "Chemistry Db Sci (Ch)",
                    "short_name": "Ch|Db Sci",
                    "prediction": {
                        "result": "4",
                        "value_add": -0.57,
                        "progress_dot": 1,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "4",
                        "value_add": -0.3165,
                        "progress_dot": 2,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.93,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 54,
                    "name": "Physics Db Sci (Py)",
                    "short_name": "Py|Db Sci",
                    "prediction": {
                        "result": "4",
                        "value_add": -0.57,
                        "progress_dot": 1,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "4",
                        "value_add": -0.3165,
                        "progress_dot": 2,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.93,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 55,
                    "name": "Biology Db  Sci (Bi)",
                    "short_name": "Bi|Db  Sci",
                    "prediction": {
                        "result": "4",
                        "value_add": -0.57,
                        "progress_dot": 1,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "4",
                        "value_add": -0.3165,
                        "progress_dot": 2,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.93,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 91,
                    "name": "Design & Technology (Dt)",
                    "short_name": "Dt",
                    "prediction": {
                        "result": "7",
                        "value_add": 1.77,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "6",
                        "value_add": 1.2407,
                        "progress_dot": 3,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "7",
                        "value_add": 1.77,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                }
            ],
            "progress_8_scores": {
                "current": {
                    "student_progress_8_id": 14142,
                    "student_id": 19928,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "current",
                    "is_valid": 1,
                    "capped": 46.5,
                    "expected_points": 52.05,
                    "value_added": -5.55,
                    "attainment8": 4.65,
                    "attainment8_dot_type": null,
                    "progress8": -0.555,
                    "progress8_dot_type": 1,
                    "ebacc_elements_capped": 14.25,
                    "ebacc_elements_expected_points": 15.11,
                    "ebacc_elements_value_added": -0.86,
                    "ebacc_elements_attainment8": 4.75,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": -0.286667,
                    "ebacc_elements_progress8_dot_type": 2,
                    "open_elements_capped": 14.75,
                    "open_elements_expected_points": 15.69,
                    "open_elements_value_added": -0.94,
                    "open_elements_attainment8": 4.91667,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": -0.313333,
                    "open_elements_progress8_dot_type": 2,
                    "is_estimate": 0
                },
                "prediction": {
                    "student_progress_8_id": 14143,
                    "student_id": 19928,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "prediction",
                    "is_valid": 1,
                    "capped": 52,
                    "expected_points": 52.05,
                    "value_added": -0.05,
                    "attainment8": 5.2,
                    "attainment8_dot_type": null,
                    "progress8": -0.005,
                    "progress8_dot_type": 2,
                    "ebacc_elements_capped": 15.25,
                    "ebacc_elements_expected_points": 15.11,
                    "ebacc_elements_value_added": 0.14,
                    "ebacc_elements_attainment8": 5.08333,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 0.0466667,
                    "ebacc_elements_progress8_dot_type": 3,
                    "open_elements_capped": 16.75,
                    "open_elements_expected_points": 15.69,
                    "open_elements_value_added": 1.06,
                    "open_elements_attainment8": 5.58333,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 0.353333,
                    "open_elements_progress8_dot_type": 3,
                    "is_estimate": 0
                },
                "target": {
                    "student_progress_8_id": 14144,
                    "student_id": 19928,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "target",
                    "is_valid": 1,
                    "capped": 69,
                    "expected_points": 52.05,
                    "value_added": 16.95,
                    "attainment8": 6.9,
                    "attainment8_dot_type": null,
                    "progress8": 1.695,
                    "progress8_dot_type": 4,
                    "ebacc_elements_capped": 20,
                    "ebacc_elements_expected_points": 15.11,
                    "ebacc_elements_value_added": 4.89,
                    "ebacc_elements_attainment8": 6.66667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 1.63,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 21,
                    "open_elements_expected_points": 15.69,
                    "open_elements_value_added": 5.31,
                    "open_elements_attainment8": 7,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 1.77,
                    "open_elements_progress8_dot_type": 4,
                    "is_estimate": 0
                }
            }
        },
        {
            "id": "18915-434",
            "student_id": 18915,
            "assessment_term_id": 434,
            "assessment_term_date": "2021-04-21",
            "is_estimate": 0,
            "student": [
                {
                    "id": 18915,
                    "person_id": 18915,
                    "name": "Graham, Jasmine",
                    "surname": "Graham",
                    "middle_name": null,
                    "forename": "Jasmine",
                    "year_group_id": 5,
                    "year_group_name": "Year 11",
                    "reg_group_id": 41,
                    "reg_group_name": "11 Moore",
                    "religion_id": 3,
                    "religion_name": "No Religion",
                    "ethnicity_id": 29,
                    "ethnicity_name": "White Eastern European",
                    "ethnicity_code": "WEEU",
                    "first_language_id": 1,
                    "language_first_name": "English",
                    "language_first_code": "ENG",
                    "sen_provision": "N",
                    "date_of_birth": "2006-06-26",
                    "admission_number": "118761",
                    "admission_date": "2019-08-21",
                    "exam_number": null,
                    "gender": "F",
                    "is_pupil_premium": false,
                    "is_fsm_eligible": false,
                    "fsm_start_date": null,
                    "fsm_end_date": null,
                    "is_eal": true,
                    "school_groups_count_by_effective_date": 21,
                    "school_groups_count": 146,
                    "leaving_date": null,
                    "created_at": "2016-08-30 03:11:20",
                    "updated_at": "2021-04-14 04:01:53",
                    "_links": {
                        "img_profile": {
                            "href": null
                        }
                    }
                }
            ],
            "course_progress": [
                {
                    "id": 1,
                    "name": "Art (Ar)",
                    "short_name": "Ar",
                    "prediction": {
                        "result": "6-",
                        "value_add": 2.06,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "5+",
                        "value_add": 1.8183,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.31,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 2,
                    "name": "Drama (Dr)",
                    "short_name": "Dr",
                    "prediction": {
                        "result": "5",
                        "value_add": 1.31,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "4",
                        "value_add": 0.4945,
                        "progress_dot": 3,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.31,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 3,
                    "name": "English (En)",
                    "short_name": "En",
                    "prediction": {
                        "result": "5",
                        "value_add": 1.1,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "3+",
                        "value_add": -0.26,
                        "progress_dot": 2,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 2.1,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 4,
                    "name": "Geography (Ge)",
                    "short_name": "Ge",
                    "prediction": {
                        "result": "6",
                        "value_add": 3.13,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "5",
                        "value_add": 2.417,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "4",
                        "value_add": 1.13,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 7,
                    "name": "Maths (Ma)",
                    "short_name": "Ma",
                    "prediction": {
                        "result": "3",
                        "value_add": -0.13,
                        "progress_dot": 2,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "current": {
                        "result": "2+",
                        "value_add": -0.7235,
                        "progress_dot": 1,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.87,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 11,
                    "name": "Religious Study SC (Rs)",
                    "short_name": "Rs|SC",
                    "prediction": {
                        "result": "7",
                        "value_add": 3.31,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "7",
                        "value_add": 3.31,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.31,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 17,
                    "name": "Spanish (Sp)",
                    "short_name": "Sp",
                    "prediction": {
                        "result": "5",
                        "value_add": 1.52,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "5-",
                        "value_add": 1.5484,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.52,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 35,
                    "name": "English Lit (En)",
                    "short_name": "En|Lit",
                    "prediction": {
                        "result": "6",
                        "value_add": 2.1,
                        "progress_dot": 4,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "current": {
                        "result": "5",
                        "value_add": 1.49,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 2.1,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 43,
                    "name": "Chemistry Db Sci (Ch)",
                    "short_name": "Ch|Db Sci",
                    "prediction": {
                        "result": "6",
                        "value_add": 3.24,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "5",
                        "value_add": 2.403,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.74,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 54,
                    "name": "Physics Db Sci (Py)",
                    "short_name": "Py|Db Sci",
                    "prediction": {
                        "result": "6",
                        "value_add": 3.24,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "5",
                        "value_add": 2.403,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.74,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 55,
                    "name": "Biology Db  Sci (Bi)",
                    "short_name": "Bi|Db  Sci",
                    "prediction": {
                        "result": "6",
                        "value_add": 3.24,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "5",
                        "value_add": 2.403,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.74,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                }
            ],
            "progress_8_scores": {
                "current": {
                    "student_progress_8_id": 14145,
                    "student_id": 18915,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "current",
                    "is_valid": 1,
                    "capped": 44.5,
                    "expected_points": 34.2,
                    "value_added": 10.3,
                    "attainment8": 4.45,
                    "attainment8_dot_type": null,
                    "progress8": 1.03,
                    "progress8_dot_type": 4,
                    "ebacc_elements_capped": 16,
                    "ebacc_elements_expected_points": 9.08,
                    "ebacc_elements_value_added": 6.92,
                    "ebacc_elements_attainment8": 5.33333,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 2.30667,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 14,
                    "open_elements_expected_points": 11.07,
                    "open_elements_value_added": 2.93,
                    "open_elements_attainment8": 4.66667,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 0.976667,
                    "open_elements_progress8_dot_type": 3,
                    "is_estimate": 0
                },
                "prediction": {
                    "student_progress_8_id": 14146,
                    "student_id": 18915,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "prediction",
                    "is_valid": 1,
                    "capped": 52.75,
                    "expected_points": 34.2,
                    "value_added": 18.55,
                    "attainment8": 5.275,
                    "attainment8_dot_type": null,
                    "progress8": 1.855,
                    "progress8_dot_type": 4,
                    "ebacc_elements_capped": 19,
                    "ebacc_elements_expected_points": 9.08,
                    "ebacc_elements_value_added": 9.92,
                    "ebacc_elements_attainment8": 6.33333,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 3.30667,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 15.75,
                    "open_elements_expected_points": 11.07,
                    "open_elements_value_added": 4.68,
                    "open_elements_attainment8": 5.25,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 1.56,
                    "open_elements_progress8_dot_type": 4,
                    "is_estimate": 0
                },
                "target": {
                    "student_progress_8_id": 14147,
                    "student_id": 18915,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "target",
                    "is_valid": 1,
                    "capped": 52,
                    "expected_points": 34.2,
                    "value_added": 17.8,
                    "attainment8": 5.2,
                    "attainment8_dot_type": null,
                    "progress8": 1.78,
                    "progress8_dot_type": 4,
                    "ebacc_elements_capped": 14,
                    "ebacc_elements_expected_points": 9.08,
                    "ebacc_elements_value_added": 4.92,
                    "ebacc_elements_attainment8": 4.66667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 1.64,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 16,
                    "open_elements_expected_points": 11.07,
                    "open_elements_value_added": 4.93,
                    "open_elements_attainment8": 5.33333,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 1.64333,
                    "open_elements_progress8_dot_type": 4,
                    "is_estimate": 0
                }
            }
        },
        {
            "id": "18708-434",
            "student_id": 18708,
            "assessment_term_id": 434,
            "assessment_term_date": "2021-04-21",
            "is_estimate": 0,
            "student": [
                {
                    "id": 18708,
                    "person_id": 18708,
                    "name": "Bennett, Kyle",
                    "surname": "Bennett",
                    "middle_name": null,
                    "forename": "Kyle",
                    "year_group_id": 5,
                    "year_group_name": "Year 11",
                    "reg_group_id": 40,
                    "reg_group_name": "11 Mandela",
                    "religion_id": 1,
                    "religion_name": "Christian",
                    "ethnicity_id": 36,
                    "ethnicity_name": "Other ethnic group",
                    "ethnicity_code": "OOEG",
                    "first_language_id": 21,
                    "language_first_name": "Spanish",
                    "language_first_code": "SPA",
                    "sen_provision": "N",
                    "date_of_birth": "1997-01-21",
                    "admission_number": "348639",
                    "admission_date": "2019-04-19",
                    "exam_number": "783580",
                    "gender": "M",
                    "is_pupil_premium": false,
                    "is_fsm_eligible": false,
                    "fsm_start_date": null,
                    "fsm_end_date": null,
                    "is_eal": true,
                    "school_groups_count_by_effective_date": 21,
                    "school_groups_count": 138,
                    "leaving_date": null,
                    "created_at": "2016-08-30 03:11:20",
                    "updated_at": "2021-04-14 04:01:52",
                    "_links": {
                        "img_profile": {
                            "href": null
                        }
                    }
                }
            ],
            "course_progress": [
                {
                    "id": 3,
                    "name": "English (En)",
                    "short_name": "En",
                    "prediction": {
                        "result": "4",
                        "value_add": 0.96,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "current": {
                        "result": "3-",
                        "value_add": 0.014,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.96,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 7,
                    "name": "Maths (Ma)",
                    "short_name": "Ma",
                    "prediction": {
                        "result": "3",
                        "value_add": 0.89,
                        "progress_dot": 3,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "current": {
                        "result": "2",
                        "value_add": -0.0045,
                        "progress_dot": 3,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "target": {
                        "result": "4",
                        "value_add": 1.89,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 8,
                    "name": "Music (Mu)",
                    "short_name": "Mu",
                    "prediction": {
                        "result": "4",
                        "value_add": 1.07,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "2+",
                        "value_add": -0.387,
                        "progress_dot": 1,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "4",
                        "value_add": 1.07,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 11,
                    "name": "Religious Study SC (Rs)",
                    "short_name": "Rs|SC",
                    "prediction": {
                        "result": "4",
                        "value_add": 1.07,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "4",
                        "value_add": 1.07,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "4",
                        "value_add": 1.07,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 17,
                    "name": "Spanish (Sp)",
                    "short_name": "Sp",
                    "prediction": {
                        "result": "9+",
                        "value_add": 5.54,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "9",
                        "value_add": 5.7668,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "4",
                        "value_add": 0.54,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 35,
                    "name": "English Lit (En)",
                    "short_name": "En|Lit",
                    "prediction": {
                        "result": "4",
                        "value_add": 0.96,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "3+",
                        "value_add": 0.514,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.96,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 43,
                    "name": "Chemistry Db Sci (Ch)",
                    "short_name": "Ch|Db Sci",
                    "prediction": {
                        "result": "3",
                        "value_add": 0.48,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "2",
                        "value_add": 0.106,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "4",
                        "value_add": 1.48,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 54,
                    "name": "Physics Db Sci (Py)",
                    "short_name": "Py|Db Sci",
                    "prediction": {
                        "result": "3",
                        "value_add": 0.48,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "2",
                        "value_add": 0.106,
                        "progress_dot": 3,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "4",
                        "value_add": 1.48,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 55,
                    "name": "Biology Db  Sci (Bi)",
                    "short_name": "Bi|Db  Sci",
                    "prediction": {
                        "result": "3",
                        "value_add": 0.48,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "2",
                        "value_add": 0.106,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "4",
                        "value_add": 1.48,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 84,
                    "name": "Travel & Tourism (Ot)",
                    "short_name": "Ot",
                    "prediction": {
                        "result": "P2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "P2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    }
                },
                {
                    "id": 86,
                    "name": "Performing Arts BTEC (Op)",
                    "short_name": "Op",
                    "prediction": {
                        "result": "P2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "P2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    }
                }
            ],
            "progress_8_scores": {
                "current": {
                    "student_progress_8_id": 14148,
                    "student_id": 18708,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "current",
                    "is_valid": 1,
                    "capped": 35.2,
                    "expected_points": 25.66,
                    "value_added": 9.54,
                    "attainment8": 3.52,
                    "attainment8_dot_type": null,
                    "progress8": 0.954,
                    "progress8_dot_type": 3,
                    "ebacc_elements_capped": 13.95,
                    "ebacc_elements_expected_points": 6.59,
                    "ebacc_elements_value_added": 7.36,
                    "ebacc_elements_attainment8": 4.65,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 2.45333,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 10.75,
                    "open_elements_expected_points": 8.78,
                    "open_elements_value_added": 1.97,
                    "open_elements_attainment8": 3.58333,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 0.656667,
                    "open_elements_progress8_dot_type": 3,
                    "is_estimate": 0
                },
                "prediction": {
                    "student_progress_8_id": 14149,
                    "student_id": 18708,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "prediction",
                    "is_valid": 1,
                    "capped": 41,
                    "expected_points": 25.66,
                    "value_added": 15.34,
                    "attainment8": 4.1,
                    "attainment8_dot_type": null,
                    "progress8": 1.534,
                    "progress8_dot_type": 4,
                    "ebacc_elements_capped": 15,
                    "ebacc_elements_expected_points": 6.59,
                    "ebacc_elements_value_added": 8.41,
                    "ebacc_elements_attainment8": 5,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 2.80333,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 12,
                    "open_elements_expected_points": 8.78,
                    "open_elements_value_added": 3.22,
                    "open_elements_attainment8": 4,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 1.07333,
                    "open_elements_progress8_dot_type": 4,
                    "is_estimate": 0
                },
                "target": {
                    "student_progress_8_id": 14150,
                    "student_id": 18708,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "target",
                    "is_valid": 1,
                    "capped": 35,
                    "expected_points": 25.66,
                    "value_added": 9.34,
                    "attainment8": 3.5,
                    "attainment8_dot_type": null,
                    "progress8": 0.934,
                    "progress8_dot_type": 3,
                    "ebacc_elements_capped": 8,
                    "ebacc_elements_expected_points": 6.59,
                    "ebacc_elements_value_added": 1.41,
                    "ebacc_elements_attainment8": 2.66667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 0.47,
                    "ebacc_elements_progress8_dot_type": 3,
                    "open_elements_capped": 9,
                    "open_elements_expected_points": 8.78,
                    "open_elements_value_added": 0.22,
                    "open_elements_attainment8": 3,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 0.0733333,
                    "open_elements_progress8_dot_type": 3,
                    "is_estimate": 0
                }
            }
        },
        {
            "id": "18648-434",
            "student_id": 18648,
            "assessment_term_id": 434,
            "assessment_term_date": "2021-04-21",
            "is_estimate": 0,
            "student": [
                {
                    "id": 18648,
                    "person_id": 18648,
                    "name": "Gray, Rowena",
                    "surname": "Gray",
                    "middle_name": null,
                    "forename": "Rowena",
                    "year_group_id": 5,
                    "year_group_name": "Year 11",
                    "reg_group_id": 41,
                    "reg_group_name": "11 Moore",
                    "religion_id": 1,
                    "religion_name": "Christian",
                    "ethnicity_id": 5,
                    "ethnicity_name": "Black Caribbean",
                    "ethnicity_code": "BCRB",
                    "first_language_id": 1,
                    "language_first_name": "English",
                    "language_first_code": "ENG",
                    "sen_provision": "N",
                    "date_of_birth": "2000-01-18",
                    "admission_number": "117611",
                    "admission_date": "2007-05-04",
                    "exam_number": "193944",
                    "gender": "F",
                    "is_pupil_premium": false,
                    "is_fsm_eligible": false,
                    "fsm_start_date": null,
                    "fsm_end_date": null,
                    "is_eal": true,
                    "school_groups_count_by_effective_date": 21,
                    "school_groups_count": 127,
                    "leaving_date": null,
                    "created_at": "2016-08-30 03:11:19",
                    "updated_at": "2021-04-14 04:01:54",
                    "_links": {
                        "img_profile": {
                            "href": null
                        }
                    }
                }
            ],
            "course_progress": [
                {
                    "id": 1,
                    "name": "Art (Ar)",
                    "short_name": "Ar",
                    "prediction": {
                        "result": "5",
                        "value_add": 1.16,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "5-",
                        "value_add": 1.1788,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.16,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 3,
                    "name": "English (En)",
                    "short_name": "En",
                    "prediction": {
                        "result": "5",
                        "value_add": 0.92,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "4-",
                        "value_add": 0.078,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.92,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 4,
                    "name": "Geography (Ge)",
                    "short_name": "Ge",
                    "prediction": {
                        "result": "5",
                        "value_add": 1.93,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "3-",
                        "value_add": -0.013,
                        "progress_dot": 3,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "4",
                        "value_add": 0.93,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 7,
                    "name": "Maths (Ma)",
                    "short_name": "Ma",
                    "prediction": {
                        "result": "4",
                        "value_add": 0.66,
                        "progress_dot": 3,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "current": {
                        "result": "4-",
                        "value_add": 0.577,
                        "progress_dot": 3,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.66,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 10,
                    "name": "Psychology (Ps)",
                    "short_name": "Ps",
                    "prediction": {
                        "result": "6",
                        "value_add": 2.16,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "5",
                        "value_add": 1.6976,
                        "progress_dot": 4,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.16,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 11,
                    "name": "Religious Study SC (Rs)",
                    "short_name": "Rs|SC",
                    "prediction": {
                        "result": "6",
                        "value_add": 2.16,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "6",
                        "value_add": 2.16,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.16,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 17,
                    "name": "Spanish (Sp)",
                    "short_name": "Sp",
                    "prediction": {
                        "result": "5",
                        "value_add": 1.49,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "5-",
                        "value_add": 1.5208,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.49,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 35,
                    "name": "English Lit (En)",
                    "short_name": "En|Lit",
                    "prediction": {
                        "result": "6-",
                        "value_add": 1.67,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "current": {
                        "result": "5-",
                        "value_add": 1.078,
                        "progress_dot": 3,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "target": {
                        "result": "6",
                        "value_add": 1.92,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 43,
                    "name": "Chemistry Db Sci (Ch)",
                    "short_name": "Ch|Db Sci",
                    "prediction": {
                        "result": "6",
                        "value_add": 3.06,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "5",
                        "value_add": 1.732,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.56,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 54,
                    "name": "Physics Db Sci (Py)",
                    "short_name": "Py|Db Sci",
                    "prediction": {
                        "result": "6",
                        "value_add": 3.06,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "5",
                        "value_add": 1.732,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.56,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 55,
                    "name": "Biology Db  Sci (Bi)",
                    "short_name": "Bi|Db  Sci",
                    "prediction": {
                        "result": "6",
                        "value_add": 3.06,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "5",
                        "value_add": 1.732,
                        "progress_dot": 4,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "target": {
                        "result": "5",
                        "value_add": 1.56,
                        "progress_dot": 4,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                }
            ],
            "progress_8_scores": {
                "current": {
                    "student_progress_8_id": 14151,
                    "student_id": 18648,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "current",
                    "is_valid": 1,
                    "capped": 45.25,
                    "expected_points": 36.02,
                    "value_added": 9.23,
                    "attainment8": 4.525,
                    "attainment8_dot_type": null,
                    "progress8": 0.923,
                    "progress8_dot_type": 3,
                    "ebacc_elements_capped": 14.75,
                    "ebacc_elements_expected_points": 9.66,
                    "ebacc_elements_value_added": 5.09,
                    "ebacc_elements_attainment8": 4.91667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 1.69667,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 13.5,
                    "open_elements_expected_points": 11.52,
                    "open_elements_value_added": 1.98,
                    "open_elements_attainment8": 4.5,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 0.66,
                    "open_elements_progress8_dot_type": 3,
                    "is_estimate": 0
                },
                "prediction": {
                    "student_progress_8_id": 14152,
                    "student_id": 18648,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "prediction",
                    "is_valid": 1,
                    "capped": 53.5,
                    "expected_points": 36.02,
                    "value_added": 17.48,
                    "attainment8": 5.35,
                    "attainment8_dot_type": null,
                    "progress8": 1.748,
                    "progress8_dot_type": 4,
                    "ebacc_elements_capped": 18,
                    "ebacc_elements_expected_points": 9.66,
                    "ebacc_elements_value_added": 8.34,
                    "ebacc_elements_attainment8": 6,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 2.78,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 16,
                    "open_elements_expected_points": 11.52,
                    "open_elements_value_added": 4.48,
                    "open_elements_attainment8": 5.33333,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 1.49333,
                    "open_elements_progress8_dot_type": 4,
                    "is_estimate": 0
                },
                "target": {
                    "student_progress_8_id": 14153,
                    "student_id": 18648,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "target",
                    "is_valid": 1,
                    "capped": 52,
                    "expected_points": 36.02,
                    "value_added": 15.98,
                    "attainment8": 5.2,
                    "attainment8_dot_type": null,
                    "progress8": 1.598,
                    "progress8_dot_type": 4,
                    "ebacc_elements_capped": 14,
                    "ebacc_elements_expected_points": 9.66,
                    "ebacc_elements_value_added": 4.34,
                    "ebacc_elements_attainment8": 4.66667,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": 1.44667,
                    "ebacc_elements_progress8_dot_type": 4,
                    "open_elements_capped": 16,
                    "open_elements_expected_points": 11.52,
                    "open_elements_value_added": 4.48,
                    "open_elements_attainment8": 5.33333,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 1.49333,
                    "open_elements_progress8_dot_type": 4,
                    "is_estimate": 0
                }
            }
        },
        {
            "id": "24866-434",
            "student_id": 24866,
            "assessment_term_id": 434,
            "assessment_term_date": "2021-04-21",
            "is_estimate": 0,
            "student": [
                {
                    "id": 24866,
                    "person_id": 24866,
                    "name": "Robertson, Lola",
                    "surname": "Robertson",
                    "middle_name": null,
                    "forename": "Lola",
                    "year_group_id": 5,
                    "year_group_name": "Year 11",
                    "reg_group_id": 34,
                    "reg_group_name": "11 Bannister",
                    "religion_id": 1,
                    "religion_name": "Christian",
                    "ethnicity_id": 2,
                    "ethnicity_name": "Black - Nigerian",
                    "ethnicity_code": "BNGN",
                    "first_language_id": 1,
                    "language_first_name": "English",
                    "language_first_code": "ENG",
                    "sen_provision": null,
                    "date_of_birth": "1996-08-25",
                    "admission_number": "112345",
                    "admission_date": "2018-07-22",
                    "exam_number": null,
                    "gender": "F",
                    "is_pupil_premium": true,
                    "is_fsm_eligible": false,
                    "fsm_start_date": null,
                    "fsm_end_date": null,
                    "is_eal": false,
                    "school_groups_count_by_effective_date": 21,
                    "school_groups_count": 46,
                    "leaving_date": null,
                    "created_at": "2019-09-28 02:02:02",
                    "updated_at": "2021-04-14 04:02:17",
                    "_links": {
                        "img_profile": {
                            "href": null
                        }
                    }
                }
            ],
            "course_progress": [
                {
                    "id": 3,
                    "name": "English (En)",
                    "short_name": "En",
                    "prediction": {
                        "result": "6",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "4-",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "english",
                        "used_in_bucket": "other_qualifications"
                    }
                },
                {
                    "id": 5,
                    "name": "History (Hi)",
                    "short_name": "Hi",
                    "prediction": {
                        "result": "6-",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "5-",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    }
                },
                {
                    "id": 7,
                    "name": "Maths (Ma)",
                    "short_name": "Ma",
                    "prediction": {
                        "result": "4",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    },
                    "current": {
                        "result": "4-",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "mathematics",
                        "used_in_bucket": "mathematics"
                    }
                },
                {
                    "id": 11,
                    "name": "Religious Study SC (Rs)",
                    "short_name": "Rs|SC",
                    "prediction": {
                        "result": "8",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "8",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 13,
                    "name": "Business Studies (Bs)",
                    "short_name": "Bs",
                    "prediction": {
                        "result": "4",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "2+",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    }
                },
                {
                    "id": 17,
                    "name": "Spanish (Sp)",
                    "short_name": "Sp",
                    "prediction": {
                        "result": "4-",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "2+",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_qualifications"
                    }
                },
                {
                    "id": 35,
                    "name": "English Lit (En)",
                    "short_name": "En|Lit",
                    "prediction": {
                        "result": "7",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    },
                    "current": {
                        "result": "6",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "english",
                        "used_in_bucket": "english"
                    }
                },
                {
                    "id": 43,
                    "name": "Chemistry Db Sci (Ch)",
                    "short_name": "Ch|Db Sci",
                    "prediction": {
                        "result": "2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 54,
                    "name": "Physics Db Sci (Py)",
                    "short_name": "Py|Db Sci",
                    "prediction": {
                        "result": "2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": null,
                        "used_in_bucket": null
                    },
                    "current": {
                        "result": "2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": null,
                        "used_in_bucket": null
                    }
                },
                {
                    "id": 55,
                    "name": "Biology Db  Sci (Bi)",
                    "short_name": "Bi|Db  Sci",
                    "prediction": {
                        "result": "2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    },
                    "current": {
                        "result": "2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_ebacc_qualifications",
                        "used_in_bucket": "other_ebacc_qualifications"
                    }
                },
                {
                    "id": 83,
                    "name": "Health & Fitness (Of)",
                    "short_name": "Of",
                    "prediction": {
                        "result": "M2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    },
                    "current": {
                        "result": "D*2",
                        "value_add": null,
                        "progress_dot": null,
                        "bucket": "other_qualifications",
                        "used_in_bucket": "other_qualifications"
                    }
                }
            ],
            "progress_8_scores": {
                "current": {
                    "student_progress_8_id": 14154,
                    "student_id": 24866,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "current",
                    "is_valid": 1,
                    "capped": 43.75,
                    "expected_points": 46.51,
                    "value_added": -2.76,
                    "attainment8": 4.375,
                    "attainment8_dot_type": null,
                    "progress8": -0.276,
                    "progress8_dot_type": 2,
                    "ebacc_elements_capped": 9.75,
                    "ebacc_elements_expected_points": 13.17,
                    "ebacc_elements_value_added": -3.42,
                    "ebacc_elements_attainment8": 3.25,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": -1.14,
                    "ebacc_elements_progress8_dot_type": 1,
                    "open_elements_capped": 14.5,
                    "open_elements_expected_points": 14.27,
                    "open_elements_value_added": 0.23,
                    "open_elements_attainment8": 4.83333,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 0.0766667,
                    "open_elements_progress8_dot_type": 3,
                    "is_estimate": 0
                },
                "prediction": {
                    "student_progress_8_id": 14155,
                    "student_id": 24866,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "prediction",
                    "is_valid": 1,
                    "capped": 49.5,
                    "expected_points": 46.51,
                    "value_added": 2.99,
                    "attainment8": 4.95,
                    "attainment8_dot_type": null,
                    "progress8": 0.299,
                    "progress8_dot_type": 3,
                    "ebacc_elements_capped": 12,
                    "ebacc_elements_expected_points": 13.17,
                    "ebacc_elements_value_added": -1.17,
                    "ebacc_elements_attainment8": 4,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": -0.39,
                    "ebacc_elements_progress8_dot_type": 1,
                    "open_elements_capped": 15.5,
                    "open_elements_expected_points": 14.27,
                    "open_elements_value_added": 1.23,
                    "open_elements_attainment8": 5.16667,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": 0.41,
                    "open_elements_progress8_dot_type": 3,
                    "is_estimate": 0
                },
                "target": {
                    "student_progress_8_id": 14156,
                    "student_id": 24866,
                    "assessment_term_id": 434,
                    "assessment_term_type": "term22",
                    "type": "target",
                    "is_valid": 1,
                    "capped": 0,
                    "expected_points": 46.51,
                    "value_added": -46.51,
                    "attainment8": 0,
                    "attainment8_dot_type": null,
                    "progress8": -4.651,
                    "progress8_dot_type": 1,
                    "ebacc_elements_capped": 0,
                    "ebacc_elements_expected_points": 13.17,
                    "ebacc_elements_value_added": -13.17,
                    "ebacc_elements_attainment8": 0,
                    "ebacc_elements_attainment8_dot_type": null,
                    "ebacc_elements_progress8": -4.39,
                    "ebacc_elements_progress8_dot_type": 1,
                    "open_elements_capped": 0,
                    "open_elements_expected_points": 14.27,
                    "open_elements_value_added": -14.27,
                    "open_elements_attainment8": 0,
                    "open_elements_attainment8_dot_type": null,
                    "open_elements_progress8": -4.75667,
                    "open_elements_progress8_dot_type": 1,
                    "is_estimate": 0
                }
            }
        }
    ],
    "_links": {
        "self": {
            "href": "http://inspinia-pamv3.local/api/teacher/progress/v1/students/search?expand=course_progress%2Cstudent%2Cprogress_8_scores&filter%5Bassessment_term_id%5D=434&per-page=10&page=1"
        },
        "first": {
            "href": "http://inspinia-pamv3.local/api/teacher/progress/v1/students/search?expand=course_progress%2Cstudent%2Cprogress_8_scores&filter%5Bassessment_term_id%5D=434&per-page=10&page=1"
        },
        "last": {
            "href": "http://inspinia-pamv3.local/api/teacher/progress/v1/students/search?expand=course_progress%2Cstudent%2Cprogress_8_scores&filter%5Bassessment_term_id%5D=434&per-page=10&page=22"
        },
        "next": {
            "href": "http://inspinia-pamv3.local/api/teacher/progress/v1/students/search?expand=course_progress%2Cstudent%2Cprogress_8_scores&filter%5Bassessment_term_id%5D=434&per-page=10&page=2"
        }
    },
    "_meta": {
        "totalCount": 215,
        "pageCount": 22,
        "currentPage": 1,
        "perPage": 10
    }
  })
}
