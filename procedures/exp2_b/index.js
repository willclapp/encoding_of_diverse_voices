let timeline = [];

let irb = {
    type: 'html-button-response',
    stimulus: '<div class ="irb"><img src="../../imgs/SUSig_2color_Stree_Stacked_Left.png" alt="Stanford University Logo" class="logo"><p id="legal"><font size="3">We invite you to participate in a research study on language production and comprehension. Your experimenter will ask you to do a linguistic task such as reading sentences or words, naming pictures or describing scenes, making up sentences of your own, or participating in a simple language game. <br><br>There are no risks or benefits of any kind involved in this study. <br><br>You will be paid for your participation at the posted rate.<br><br>If you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at anytime without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.<br><br>CONTACT INFORMATION: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact the Protocol Director Meghan Sumner at (650)-725-9336. If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Palo Alto, CA 94306 USA.<br><br>If you agree to participate, please proceed to the study tasks.</font></p></div>',
    choices: ['Continue']
};

timeline.push(irb);

let general_instructions = {
    type: 'html-keyboard-response',
    stimulus: `<div class="gen_ins"><p>In this experiment, you will hear recordings and will make decisions about them.<br><br>IMPORTANT: Please only accept this task if you are listening through headphones and working in a quiet environment.<br><br>Press the space bar to continue.</p></div>`,
    choices: ['space']
};

timeline.push(general_instructions);

let audio_check_instructions = {
    type: 'html-keyboard-response',
    stimulus: `<div class="gen_ins"><p>Before the experiment begins, we'd like to do a quick audio check. During the audio check, you'll hear two tones in a row, and then be asked to select which tone was quieter. Sometimes, the two tones will be the same.<br><br>If the first tone was quieter, press '1', and if the second tone was quieter, press '2'. If both tones seemed about the same, press '0'.<br><br>When you're ready, press the space bar to begin the audio check.</p></div>`,
    choices: ['space']
}

timeline.push(audio_check_instructions, audio_check_reset);
for (let i = 0; i < audiocheck_trials_first.length; i++) {
    timeline.push(audiocheck_trials_first[i][0]);
    timeline.push(audiocheck_trials_first[i][1]);
}

timeline.push(audio_check_evaluate, audio_check_between);

for (let i = 0; i < audiocheck_trials_second.length; i++) {
    timeline.push(audiocheck_trials_second[i][0]);
    timeline.push(audiocheck_trials_second[i][1]);
}

timeline.push(audio_check_second_evaluate, audio_check_after_bad, audio_check_after_good);

let instructions = {
    type: 'html-keyboard-response',
    stimulus: function() {
        if (button_order == 'NEW_OLD') {
            return '<div class="spec_ins"><p>In this experiment, you will be played sound recordings of a series of words, one at a time. Sometimes you will be hearing the word for the first time, and sometimes you will be hearing it for the second time. Your job is to decide whether or not you\'ve already heard the word. If you think it\'s the first time you\'ve heard the word, you should indicate that it\'s NEW by pressing the \'D\' key. If you think that you\'ve already heard the word earlier in the experiment, you should indicate that it\'s OLD by pressing the \'K\' key. <br><br>Make sure to listen carefully and proceed as quickly and accurately as you can. You must answer within 4 seconds, or the next word will play automatically. Before the main experiment, there will be a brief practice phase where you\'ll receive feedback on your answers.<br><br>When you\'re ready to begin the practice round, press the space bar.</p></div>';
        } else {
            return '<div class="spec_ins"><p>In this experiment, you will be played sound recordings of a series of words, one at a time. Sometimes you will be hearing the word for the first time, and sometimes you will be hearing it for the second time. Your job is to decide whether or not you\'ve already heard the word. If you think it\'s the first time you\'ve heard the word, you should indicate that it\'s NEW by pressing the \'K\' key. If you think that you\'ve already heard the word earlier in the experiment, you should indicate that it\'s OLD by pressing the \'D\' key. <br><br>Make sure to listen carefully and proceed as quickly and accurately as you can. You must answer within 4 seconds, or the next word will play automatically. Before the main experiment, there will be a brief practice phase where you\'ll receive feedback on your answers.<br><br>When you\'re ready to begin the practice round, press the space bar.</p></div>';
        }
    },
    choices: ['space']
};

timeline.push(instructions);

for (i = 0; i < num_practice * 2; i++) {
    timeline.push(practice_audio_objects[i]);
    timeline.push(practice_response_objects[i]);
    timeline.push(feedback_trial);
}


let end_practice = {
    type: 'html-keyboard-response',
    stimulus: `<div class="spec_ins"><p>The practice round is now complete, and for the remainder of the experiment, you won't receive feedback on your responses.<br><br>When you're ready to move on, press the space bar.</p></div>`,
    choices: ['space'],
    on_start: function() {
        jsPsych.setProgressBar(0);
    }
    
};

timeline.push(end_practice);

for (i = 0; i < num_memload * 2; i++) {
    timeline.push(memload_audio_objects[i]);
    timeline.push(memload_response_objects[i]);
    timeline.push(inter_trial);
}

for (i = 0; i < num_exp * 2; i++) {
    timeline.push(exp_audio_objects[i]);
    timeline.push(exp_response_objects[i]);
    timeline.push(inter_trial);
}

let social_instructions = {
    type: 'html-keyboard-response',
    stimulus: '<div class="pre-test-container"><p>Great Job! You finished the Experiment.<br><br>To help us interpret our results, it would be helpful to learn a little more about you. Please answer the following questions.</p><br>Press the space bar to continue.</div>',
    choices: ['space'],
    post_trial_gap: 250
}

timeline.push(social_instructions)

var survey1 = {
    type: 'survey-html-form',
    preamble: '<p><br>We would like you to answer the following questions. <br>If you\'d rather not answer, select "Prefer not to say" or type "NA".</p><br>',
    html: '<ol class="input-wrapper">' +
        hand +
        gender +
        age +
        region +
        race +
        ethnicity +
        language +
        '</ol>'
};

var survey2 = {
    type: 'survey-html-form',
    preamble: '<p><br>We would like you to answer answer the following questions. <br>If you\'d rather not answer, select "Prefer not to say" or type "NA".</p><br>',
    html: '<ol class="input-wrapper">' +
        assess +
        audio +
        interruption +
        interruption_time +
        problems +
        fair_price +
        comments +
        '</ol>'
};

timeline.push(survey1)
timeline.push(survey2)

jsPsych.init({
    preload_audio: preload_audiocheck,
    timeline: timeline,
    show_progress_bar: true,
    auto_update_progress_bar: false,
    on_finish: function(data) {
        proliferate.submit({"trials": data.values()});
      }
    // on_finish: function () {
    //     jsPsych.data.displayData('csv');
    // }
});