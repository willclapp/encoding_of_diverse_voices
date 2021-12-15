// Format here pulled from CJ Brickhouse:
// https://github.com/chrisbrickhouse/Experiment-templates/blob/master/audio-norming/demo-questions.js

var make_question = function (label, inner_html) {
    var question = '<div class="demo-question-wrapper">' +
        '<li class="demographic-question">' + label + '</li>' +
        inner_html +
        '</div>';
    return question;
}

var html_input = function (QObj) {
    if (QObj.type == 'checkbox') {
        var ret = '<div class="form-checkbox-label"><label for="' + QObj.name + '">' +
            '<input type="checkbox" class="input-checkbox-option" name="' + QObj.name + '" /> ' +
            '<span>' + QObj.label + '</span>' +
            '</label></div>';
    } else if (QObj.type == 'time') {
        var ret = '<div class="form-year-label">' +
            '<input type="text" required class="input-year-textbox" name="' + QObj.name + '"placeholder="" />' +
            '</div>';
    } else if (QObj.type == 'text-entry') {
        var ret = '<div class="form-year-label">' +
            '<input type="text" required class="input-year-textbox" rows="2" cols="50" name="' + QObj.name + '"placeholder="" />' +
            '</div>';
    } else if (QObj.type == 'radio') {
        var ret = '<div class="form-radio-label"><label for="' + QObj.id + '">' +
            '<input type="radio" required name="' + QObj.name + '" id="' + QObj.id + '" value="' + QObj.id + '" />' +
            '<span>' + QObj.label + '</span>' +
            '</label></div>'
    } else if (QObj.type == 'resp-other') {
        var ret = QObj.label + '<input class="resp-other" required type="text" name="' + QObj.name + '" />'
    } else if (QObj.type === 'select') {
        var ret = '<div class="form-select"><label for="' + QObj.name + '">' + QObj.label + '</label>' +
            '<select name="' + QObj.name + '">';
        ret += '<option value="" selected disabled hidden></option>';
        for (var i = 0; i < QObj.options.length; i++) {
            ret = ret + html_input(QObj.options[i])
        }
        ret = ret + '</select></div>'
    } else if (QObj.type === 'select-option') {
        var ret = '<option value="' + QObj.name + '">' + QObj.label + '</option>'
    } else if (QObj.type === 'textbox') {
        var ret = '<div class="form-textbox-label">' +
            '<input type="text" required name="' + QObj.name +
            '" pattern="' + QObj.pattern +
            '" placeholder="' + QObj.placeholder +
            '" /></div>';
    } else if (QObj.type === 'yes-no') {
        var ret = html_input({ type: 'radio', name: QObj.name, id: QObj.name + '-yes', label: 'Yes' });
        ret += html_input({ type: 'radio', name: QObj.name, id: QObj.name + '-no', label: 'No' });
    } else {
        return '<input type="checkbox" required class="input-checkbox-option" name="' + name + '" /> ';
    }
    return ret
};

var interruption_options = [
    html_input({ type: 'radio', name: 'interruption', id: 'yes', label: 'Yes' }),
    html_input({ type: 'radio', name: 'interruption', id: 'no', label: 'No' }),
    html_input({ type: 'radio', name: 'interruption', id: 'no-answer', label: 'Prefer not to say' })
]
var interruption = make_question("During the course of this task, were you interrupted or did you step away at all?", interruption_options.join(''))

var interruption_time = make_question("If yes, can you estimate how long in minutes you spent on tasks other than this task? (Type 'NA' if you prefer not to answer.)", html_input({ type: 'time', name: 'interruption-time' }));

var fair_price = make_question("What do you think is a fair price for the work you did? (Type 'NA' if you prefer not to answer.)", html_input({ type: 'time', name: 'fair-price' }));

var hand_options = [
    html_input({ type: 'radio', name: 'hand', id: 'left', label: 'Left' }),
    html_input({ type: 'radio', name: 'hand', id: 'right', label: 'Right' }),
    html_input({ type: 'radio', name: 'hand', id: 'no-answer', label: 'Prefer not to say' })
]
var hand = make_question("Are you primarily left-handed or right-handed?", hand_options.join(''))

var audio_options = [
    html_input({ type: 'radio', name: 'audio', id: 'computer-speaker', label: 'Computer speakers'}),
    html_input({ type: 'radio', name: 'audio', id: 'external-speaker', label: 'External speakers'}),
    html_input({ type: 'radio', name: 'audio', id: 'headphones', label: 'Headphones'}),
    html_input({ type: 'radio', name: 'audio', id: 'other', label: 'Other'}),
]

var audio = make_question("How did you listen to the audio during this task?", audio_options.join(''))

var assess_options = [
    html_input({ type: 'radio', name: 'assess', id: 'yes', label: 'Yes' }),
    html_input({ type: 'radio', name: 'assess', id: 'no', label: 'No' }),
    html_input({ type: 'radio', name: 'assess', id: 'confused', label: 'I was confused' })
]
var assess = make_question("Did you read the instructions and do you think you did the task correctly?", assess_options.join(''))

var problems = make_question("Were there any problems or bugs in the experiment?", html_input({ type: 'text-entry', name: 'problems' }))

var audio_options = [
    html_input({ type: 'radio', name: 'audio', id: 'computer-speaker', label: 'Computer speakers'}),
    html_input({ type: 'radio', name: 'audio', id: 'external-speaker', label: 'External speakers'}),
    html_input({ type: 'radio', name: 'audio', id: 'headphones', label: 'Headphones'}),
    html_input({ type: 'radio', name: 'audio', id: 'other', label: 'Other'}),
]

var listen = make_question("How did you listen to the audio during this task?", audio_options.join(''))

var gender_options = [
    html_input({ type: 'radio', name: 'gender', id: 'female', label: 'Female'}),
    html_input({ type: 'radio', name: 'gender', id: 'male', label: 'Male'}),
    html_input({ type: 'radio', name: 'gender', id: 'nb-nc', label: 'Gender non-binary or non-conforming'}),
    html_input({ type: 'radio', name: 'gender', id: 'no-answer', label: 'Prefer not to say'})
]

var gender = make_question("What is your gender?", gender_options.join(''))

var age = make_question("What is your age?", html_input({ type: 'time', name: 'age' }))

var language = make_question("Were there any languages other than English spoken at home when you were growing up?", html_input({type: 'time', name: 'language'}))

var comments = make_question("We would be interested in any comments you have about this experiment. Please type them here:", html_input({type: 'text-entry', name: 'comments'}))

var race_options = [
    html_input({ type: 'checkbox', name: 'race-am-ind', id: 'am-ind', label: 'American Indian or Alaska Native'}),
    html_input({ type: 'checkbox', name: 'race-black', id: 'black', label: 'Black or African American'}),
    html_input({ type: 'checkbox', name: 'race-east-asian', id: 'east-asian', label: 'East Asian'}),
    html_input({ type: 'checkbox', name: 'race-pi', id: 'pi', label: 'Pacific Islander'}),
    html_input({ type: 'checkbox', name: 'race-sw-asian', id: 'sw-asian', label: 'South or West Asian'}),
    html_input({ type: 'checkbox', name: 'race-white', id: 'white', label: 'White'}),
    html_input({ type: 'checkbox', name: 'race-other', id: 'other', label: 'Other'}),
    html_input({ type: 'checkbox', name: 'race-no-answer', id: 'no-answer', label: 'Prefer not to say'}),

]

var race = make_question("How would you describe your race?", race_options.join(''))

var region_options = [
    html_input({ type: 'radio', name: 'region', id: 'west', label: 'West Coast'}),
    html_input({ type: 'radio', name: 'region', id: 'rockies', label: 'Rocky Mountains'}),
    html_input({ type: 'radio', name: 'region', id: 'southwest', label: 'Southwest'}),
    html_input({ type: 'radio', name: 'region', id: 'midwest', label: 'Midwest'}),
    html_input({ type: 'radio', name: 'region', id: 'northeast', label: 'Northeast'}),
    html_input({ type: 'radio', name: 'region', id: 'midatlantic', label: 'Midatlantic'}),
    html_input({ type: 'radio', name: 'region', id: 'south', label: 'South'}),
    html_input({ type: 'radio', name: 'region', id: 'alaska', label: 'Alaska'}),
    html_input({ type: 'radio', name: 'region', id: 'hawaii', label: 'Hawaii'}),
    html_input({ type: 'radio', name: 'region', id: 'no-answer', label: 'Prefer not to say'})
]

var region = make_question("In which region of the U.S. do you currently live?", region_options.join(''))

var ethnicity = make_question("How would you describe your ethnicity, e.g., Latinx, Ashkenazi, Arab, etc. (Type 'NA' if you prefer not to answer.)", html_input({ type: 'time', name: 'ethnicity'}))
