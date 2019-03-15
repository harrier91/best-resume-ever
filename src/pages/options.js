import yaml from 'js-yaml';
import {
    PERSON
} from '../../resume/data.yml';
import {
    terms
} from '../terms';

export function getVueData () {
    return {
        person: yaml.load(PERSON),
        terms: terms,
    };
}
