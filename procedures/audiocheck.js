let preload_audiocheck = [
    '../../audio/audiocheck/IO.wav',
    '../../audio/audiocheck/IQ.wav',
    '../../audio/audiocheck/OI.wav',
    '../../audio/audiocheck/QI.wav',
    '../../audio/audiocheck/silence.wav'
];

let audio_check_reset = {
    type: 'html-keyboard-response',
    stimulus: " ",
    trial_duration: 10,
    on_finish: function() {
        wrong_phase = 0;
        correct_quiet = 0;
    }
}

let audio_check_evaluate = {
    type: 'html-keyboard-response',
    stimulus: " ",
    trial_duration: 10,
    on_finish: function() {
        if (wrong_phase <= 1 && correct_quiet >= 3) {
            pass = true;
        }
        wrong_phase = 0;
        correct_quiet = 0;
    }
}

let audio_check_second_evaluate = {
    type: 'html-keyboard-response',
    stimulus: " ",
    trial_duration: 10,
    on_finish: function() {
        if (!pass) {
            if (wrong_phase <= 1 && correct_quiet >= 3) {
                pass = true;
            }
        }
        wrong_phase = 0;
        correct_quiet = 0;
    }
}

let audio_check_between = {
    type: 'html-keyboard-response',
    stimulus: `<div class="gen_ins"><p>The results of the audio check suggest you may not be wearing headphones, as is required for participation in this experiment. If you'd like put on headphones and continue, or believe you're getting this message in error, please try the audio check again. Otherwise, please return to Prolific.<br><br>When you're ready, press the space bar to restart audio check again.</p></div>`,
    choices: ['space'],
    trial_duration: function() {
        if (pass) {
            return 0;
        } else {
            return 1000000000;
        }
    },
    on_finish: function() {
        if (wrong_phase <= 1 && correct_quiet >= 3) {
            pass = true;
        }
    }
}

let audio_check_after_bad = {
    type: 'html-keyboard-response',
    stimulus: `<div class="gen_ins"><p>The results of the audio check suggest that you're not wearing headphones, as is required for participation in this experiment.<br><br>Please close this window and return to Prolific.</p></div>`,
    choices: [],
    trial_duration: function() {
        if (pass) {
            return 0;
        } else {
            return 1000000000;
        }
    },
    stimulus_duration: function() {
        if (pass) {
            return 0;
        } else {
            return 1000000000;
        }
    }
}

let audio_check_after_good = {
    type: 'html-keyboard-response',
    stimulus: `<div class="gen_ins"><p>Thank you for completing the audio check. Please press the space bar to continue to the experiment.</p></div>`,
    choices: ['space']
}

let html_content = '<div class="quietest-container"><div><p class="quietest">Which sound was the quietest?</p></div><div class="yes-no"><div class="quietest_option"><p>FIRST</p><p>Press 1</p></div><div class="quietest_option"><p>SECOND</p><p>Press 2</p></div><div class="quietest_option"><p>NONE</p><p>Press 0</p></div></div></div>'



let io_audio = {
    type: 'audio-keyboard-response', 
    stimulus: function() {
        if (!pass) {
            return '../../audio/audiocheck/IO.wav'
        } else {
            return '../../audio/audiocheck/silence.wav'
        }
    },   
    prompt: function() {
        if (!pass) {
            return html_content;
        } else {
            return " ";
        }
    },
    trial_ends_after_audio: true, 
    post_trial_gap: 0, 
    response_allowed_while_playing: false
}

let io_response = {
    type: 'html-keyboard-response', 
    stimulus: function() {
        if (!pass) {
            return html_content;
        } else {
            return " ";
        }
    },
    choices: ['1', '2', '0'],
    trial_duration: function() {
        if (!pass) {
            return 5000;
        } else {
            return 0;
        }
    },
    post_trial_gap: function() {
        if (!pass) {
            return 1000;
        } else {
            return 0;
        }
    }, 
    on_finish: function(data) {
        if (data.key_press == 50) {
            wrong_phase++;
        }
        console.log(wrong_phase);
    }
}

let oi_audio = {
    type: 'audio-keyboard-response', 
    stimulus: function() {
        if (!pass) {
            return '../../audio/audiocheck/OI.wav'
        } else {
            return '../../audio/audiocheck/silence.wav'
        }
    }, 
    prompt: function() {
        if (!pass) {
            return html_content;
        } else {
            return " ";
        }
    },
    trial_ends_after_audio: true, 
    post_trial_gap: 0, 
    response_allowed_while_playing: false
}

let oi_response = {
    type: 'html-keyboard-response', 
    stimulus: function() {
        if (!pass) {
            return html_content;
        } else {
            return " ";
        }
    },
    choices: ['1', '2', '0'],
    trial_duration: function() {
        if (!pass) {
            return 5000;
        } else {
            return 0;
        }
    },
    post_trial_gap: function() {
        if (!pass) {
            return 1000;
        } else {
            return 0;
        }
    },  
    on_finish: function(data) {
        if (data.key_press == 49) {
            wrong_phase++;
        }
        console.log(wrong_phase);
    }
}

let iq_audio = {
    type: 'audio-keyboard-response', 
    stimulus: function() {
        if (!pass) {
            return '../../audio/audiocheck/IQ.wav'
        } else {
            return '../../audio/audiocheck/silence.wav'
        }
    }, 
    prompt: function() {
        if (!pass) {
            return html_content;
        } else {
            return " ";
        }
    },
    trial_ends_after_audio: true, 
    post_trial_gap: 0, 
    response_allowed_while_playing: false
}

let iq_response = {
    type: 'html-keyboard-response', 
    stimulus: function() {
        if (!pass) {
            return html_content;
        } else {
            return " ";
        }
    },
    choices: ['1', '2', '0'],
    trial_duration: function() {
        if (!pass) {
            return 5000;
        } else {
            return 0;
        }
    },
    post_trial_gap: function() {
        if (!pass) {
            return 1000;
        } else {
            return 0;
        }
    },  
    on_finish: function(data) {
        if (data.key_press == 50) {
            correct_quiet++;
        }
        console.log(correct_quiet);
    }
}

let qi_audio = {
    type: 'audio-keyboard-response', 
    stimulus: function() {
        if (!pass) {
            return '../../audio/audiocheck/QI.wav'
        } else {
            return '../../audio/audiocheck/silence.wav'
        }
    }, 
    prompt: function() {
        if (!pass) {
            return html_content;
        } else {
            return " ";
        }
    },
    trial_ends_after_audio: true, 
    post_trial_gap: 0, 
    response_allowed_while_playing: false
}

let qi_response = {
    type: 'html-keyboard-response', 
    stimulus: function() {
        if (!pass) {
            return html_content;
        } else {
            return " ";
        }
    },
    choices: ['1', '2', '0'],
    trial_duration: function() {
        if (!pass) {
            return 5000;
        } else {
            return 0;
        }
    },
    post_trial_gap: function() {
        if (!pass) {
            return 1000;
        } else {
            return 0;
        }
    },  
    on_finish: function(data) {
        if (data.key_press == 49) {
            correct_quiet++;
        }
        console.log(correct_quiet);
    }
}

let audiocheck_polarity = [
    [io_audio, io_response],
    [io_audio, io_response],
    [io_audio, io_response],
    [io_audio, io_response],
    [oi_audio, oi_response],
    [oi_audio, oi_response],
    [oi_audio, oi_response],
    [oi_audio, oi_response]
]
let audiocheck_volume = [
    [iq_audio, iq_response],
    [iq_audio, iq_response],
    [iq_audio, iq_response],
    [iq_audio, iq_response],
    [qi_audio, qi_response],
    [qi_audio, qi_response],
    [qi_audio, qi_response],
    [qi_audio, qi_response]
]

audiocheck_polarity = shuffle(audiocheck_polarity);
audiocheck_volume = shuffle(audiocheck_volume);
let audiocheck_trials_first = [];
let audiocheck_trials_second = [];
for (let i = 0; i < 4; i++) {
    audiocheck_trials_first.push(audiocheck_polarity[i]);
    audiocheck_trials_first.push(audiocheck_volume[i]);
    audiocheck_trials_second.push(audiocheck_polarity[i+4]);
    audiocheck_trials_second.push(audiocheck_volume[i+4]);
}
audiocheck_trials_first = shuffle(audiocheck_trials_first);
audiocheck_trials_second = shuffle(audiocheck_trials_second);

// 0 is 48
// 1 is 49
// 2 is 50